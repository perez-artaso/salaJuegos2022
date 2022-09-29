import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { AhorcadoScore } from '../../models/ahorcado-score';
import { WordBag } from '../../models/word-bag';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  wordBag: WordBag;

  playerScore: AhorcadoScore = {} as AhorcadoScore;

  stringToGuess: string = '';
  notGuessed: string = '';
  wrongGuesses: number = 0;
  chances: number = 5;

  exposedStr: string = '';

  inputEnabled: boolean = true;
  gameOver: boolean = false;
  won: boolean = false;

  constructor(private scores: ScoreService, private auth: AuthService) {
    this.wordBag = new WordBag();
    this.stringToGuess = this.wordBag.getWord();
    this.notGuessed = this.stringToGuess;
    this.setExposedStr();
  }

  ngOnInit(): void {

    this.initScore();

  }

  makeGuess(letter: string) {

    this.inputEnabled = false;

    if (this.notGuessed.includes(letter)) {

      this.notGuessed = this.notGuessed.split(letter).join('');

      this.revealChars(
        letter, 
        this.charPositionsInStr(this.stringToGuess, letter, [])
      );

    } else this.wrongGuesses++;

    if (this.wrongGuesses == this.chances) this.defeat();
    
    if (this.notGuessed == '') {
      this.victory();
    }

    if (!this.gameOver) this.inputEnabled = true;

  }

  initScore() {
    this.scores.getDocuments().subscribe(
      ( scores ) => {
        
        const pScore = scores.filter( (s) => s.user_id == this.auth.GetCurrentUserID() );

        if (pScore.length == 0) {

          const newScore = new AhorcadoScore( this.auth.GetCurrentUserID(), 0, Date.now().toString() );

          this.scores.addDocument(
            newScore.getLiteralObjectRepresentation()
          ).then(
            () => this.playerScore = newScore
          );

        } else this.playerScore = pScore[0]

      }
    );
  }

  defeat() {
    this.gameOver = true;
    this.playerScore.score = this.playerScore.score - 5;
    this.updateScore();
  }
  
  setExposedStr() {
    for (let i = 0; i < this.stringToGuess.length; i++) {
      this.exposedStr += '_';
    }
  }

  revealChars(char: string, positions: Array<number>) {

    positions.forEach(
      (position) => {
        this.exposedStr = 
          (this.exposedStr.slice(0, position) + 
          char + 
          this.exposedStr.slice(position + 1))
      }
    );
    
  }

  charPositionsInStr(str: string, char: string, positions_found: Array<number>, last_position_found: number = -1): Array<number> {
    
    const indexFound = str.indexOf(char);

    if (indexFound !== -1) {
      return this.charPositionsInStr(
        str.slice(indexFound+1),
        char,
        positions_found.concat([indexFound + (last_position_found + 1)]),
        indexFound
      )
    }
    
    return positions_found;

  }

  reset() {
    this.wordBag = new WordBag();
    this.stringToGuess = this.wordBag.getWord();
    this.chances = 5;
    this.wrongGuesses = 0;
    this.notGuessed = this.stringToGuess;
    this.exposedStr = '';
    this.inputEnabled = true;
    this.gameOver = false;
    this.won = false;
    this.setExposedStr();
  }


  victory() {
    this.gameOver = true;
    this.won = true;
    this.playerScore.score = this.playerScore.score + this.chances - this.wrongGuesses;
    this.updateScore();
  }

  updateScore() {
    
    this.playerScore.timestamp = Date.now().toString();

    this.scores.updateDocument(
      this.playerScore.id,
      this.playerScore
    );

  }

}