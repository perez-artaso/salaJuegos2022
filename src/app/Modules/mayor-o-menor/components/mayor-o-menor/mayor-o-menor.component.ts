import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Card } from '../../models/card';
import { CardDeck } from '../../models/card-deck';
import { MOMScore } from '../../models/mom-score';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'mayor-o-menor',
  templateUrl: './mayor-o-menor.component.html',
  styleUrls: ['./mayor-o-menor.component.css']
})
export class MayorOMenorComponent implements OnInit {

  cardDeck: CardDeck;
  lastCard: Card;
  currentCard: Card = new Card(0, '');
  higherSelected: boolean = true;

  playerScore: MOMScore = {} as MOMScore;

  revealCurrentCard: boolean = false;
  turnEnded: boolean = false;
  messageForUser: string = 'Seleccioná tu opción y pedí una carta';
  wrongGuess: boolean = false;

  constructor(private scores: ScoreService, private auth: AuthService) {
    this.cardDeck = new CardDeck();
    this.lastCard = this.cardDeck.popRandomCard();
  }

  ngOnInit(): void {
    this.initScore();
  }

  setHigher(higherSelected: boolean) {
    this.higherSelected = higherSelected;
  }

  makeGuess() {

    this.currentCard = this.cardDeck.popRandomCard();
    this.turnEnded = true;

    if (this.lastCard.getNumber() === this.currentCard.getNumber()) {
      this.playerScore.score = this.playerScore.score - 2;
      this.messageForUser = "Son iguales, mala suerte! Pierde dos puntos.";
      this.wrongGuess = true;
      this.updateScore();
    } else {
      if (this.higherSelected == (this.lastCard.getNumber() < this.currentCard.getNumber())) {
        this.victory();
      } else {
        this.defeat();
      }
    }

    this.revealCurrentCard = true;

  }

  victory() {
    this.playerScore.score++;
    this.messageForUser = "Excelente! Suma un punto.";
    this.wrongGuess = false;
    this.updateScore();
  }

  defeat() {
    this.playerScore.score--;
    this.messageForUser = "Mala Suerte! Pierde un punto.";
    this.wrongGuess = true;
    this.updateScore();
  }

  newTurn () {

    this.turnEnded = false;
    this.lastCard = this.currentCard;
    this.revealCurrentCard = false;
    this.messageForUser = 'Seleccioná tu opción y pedí una carta.';
    
  }


  initScore() {
    this.scores.getDocuments().subscribe(
      ( scores ) => {
        
        const pScore = scores.filter( (s) => s.user_id == this.auth.GetCurrentUserID() );

        if (pScore.length == 0) {

          const newScore = new MOMScore( this.auth.GetCurrentUserID(), this.auth.GetCurrentUserEmail(), 0, Date.now().toString() );

          this.scores.addDocument(
            newScore.getLiteralObjectRepresentation()
          ).then(
            () => this.initScore()
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
