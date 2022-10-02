import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CaminoScore } from '../../models/camino-score';
import { BoardService } from '../../services/board.service';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'el-camino',
  templateUrl: './el-camino.component.html',
  styleUrls: ['./el-camino.component.css']
})
export class ElCaminoComponent implements OnInit {

  directionObject: Object = {};
  lives: Array<number> = [1,1,1];

  timer: number = 5;

  message: string;

  lightsOn: boolean = true;

  gameOver: boolean = true;
  won: boolean = false;

  playerScore: CaminoScore = {} as CaminoScore;

  constructor(private scores: ScoreService, private boardService: BoardService, private auth: AuthService) { 
    this.message = "¡ Recordá el camino !";
  }

  ngOnInit(): void {
    this.initScore();
    this.setTimer();
  }

  moveChip(direction: string) {
    this.directionObject = {
      direction: direction,
      timestamp: Date.now()
    };
  }

  wrongMove() {
    this.lives.pop()
    
    if(this.lives.length == 0) {
      this.gameOver = true;
      this.boardService.AskForLights(true);
      this.message = "¡PERDISTE!";
    }

  }

  setMessageClasses() {
    return {
      'alert alert-danger': this.lives.length == 0,
      'alert alert-success': this.lives.length != 0
    };
  }

  newGame() {

    this.directionObject = {};
    this.lives = [1,1,1];
    this.timer = 5;
    this.message = "";
    this.lightsOn = true;
    this.gameOver = true;
    this.won = false;
    
    this.boardService.AskForNewBoard();
    this.setTimer();
    
}

  setTimer() {
    const interval = setInterval(
      () => {
        this.timer--;
        if (this.timer == 0) {
          this.lightsOut(interval)
        }
      },
      1000
    );
  }

  lightsOut(intervalRef: any) {
    clearInterval(intervalRef);
    this.gameOver = false;
    this.lightsOn = false;
  }

  wonGame() {
    this.won = true;
    this.gameOver = true;
    this.lightsOn = true;
    this.message = "¡Felicidades! ¡ GANASTE !";
    this.playerScore.score = this.playerScore.score + this.lives.length;
    this.updateScore();
  }

  initScore() {
    this.scores.getDocuments().subscribe(
      ( scores ) => {
        
        const pScore = scores.filter( (s) => s.user_id == this.auth.GetCurrentUserID() );

        if (pScore.length == 0) {

          const newScore = new CaminoScore( this.auth.GetCurrentUserID(), this.auth.GetCurrentUserEmail(), 0, Date.now().toString() );

          this.scores.addDocument(
            newScore.getLiteralObjectRepresentation()
          ).then(
            () => this.playerScore = newScore
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
