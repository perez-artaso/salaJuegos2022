import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { BanderasScore } from '../../models/banderas-score';
import { CountryService } from '../../services/country.service';
import { ScoreService } from '../../services/score.service';

enum EStatus {
  pendant = 0,
  isCorrect,
  isIncorrect
}

interface IOption {
  optionObject: any;
  status: EStatus;
}

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  countries: Array<any> = [];
  options: Array<IOption | undefined | null> = [];
  selectedOption: IOption | undefined | null = {} as IOption ;
  winFlag: boolean = false;
  playerScore: BanderasScore = {} as BanderasScore;

  constructor(private countryService: CountryService, private scores: ScoreService, private auth: AuthService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      (c) => { 
        this.countries = c as Array<any>;
        this.setOptions(this.countries.map(x=>x), 3, 0);
      } 
    )
    this.initScore();
  }

  setOptions( optionsPool: Array<IOption | undefined | null>, optionsNeeded: number, optionsGotten: number ): void {
    
    if (optionsNeeded > optionsGotten) {
      
      this.options[ ((optionsNeeded - optionsGotten) - optionsNeeded ) * -1 ] = {
        optionObject: optionsPool.splice(this.getRandomIntInRange(0, optionsPool.length - 1), 1)[0],
        status: EStatus.pendant
      }

      this.setOptions(optionsPool, optionsNeeded, ++optionsGotten);

    } else {
      this.selectedOption = this.options[this.getRandomIntInRange(0, this.options.length - 1)];
    } ;

  }

  getOption( optionPool: Array<IOption> ) {
    return optionPool[this.getRandomIntInRange(0, optionPool.length - 1)]
  }

  getRandomCountry() {
    return this.countries[this.getRandomIntInRange(0, this.countries.length - 1)];
  }

  getRandomIntInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onSelectedOption(selectedOption: string) {

    this.updateOptions();

    if (selectedOption == this.selectedOption?.optionObject.name.common){
      
      this.winFlag = true;

      this.playerScore.score++;
      this.updateScore();

    } else {
      this.playerScore.score--;
      this.updateScore();
    }

  }

  newTry () {
    this.winFlag = false;
    this.setOptions(this.countries.map(x=>x), 3, 0);
  }

  updateOptions() {
    this.options.forEach((option) => {

      if (option) {

        if (option?.optionObject.name.common == this.selectedOption?.optionObject.name.common) {

          option.status = EStatus.isCorrect;
  
        } else {
           option.status = EStatus.isIncorrect;
        }

      }      
      

    });
  }

  selectRandomFlag (): string {
    return this.options[this.getRandomIntInRange(0, this.options.length - 1)]?.optionObject.flags.png;
  }

  initScore() {
    this.scores.getDocuments().subscribe(
      ( scores ) => {
        
        const pScore = scores.filter( (s) => s.user_id == this.auth.GetCurrentUserID() );

        if (pScore.length == 0) {

          const newScore = new BanderasScore( this.auth.GetCurrentUserID(), this.auth.GetCurrentUserEmail(), 0, Date.now().toString() );

          this.scores.addDocument(
            newScore.getLiteralObjectRepresentation()
          ).then(
            (s) => this.playerScore = newScore
          );

        } else this.playerScore = pScore[0]

      }
    );
  }

  updateScore() {
    
    this.playerScore.timestamp = Date.now().toString();

    this.scores.updateDocument(
      this.playerScore.id,
      this.playerScore
    );

  }

}
