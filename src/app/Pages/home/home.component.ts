import { Component, OnInit } from '@angular/core';
import { HomeGameWindow } from 'src/app/Models/home-game-window';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: HomeGameWindow[] = [];

  constructor() { }

  ngOnInit(): void {
    this.games.push(
      new HomeGameWindow (
        "/ahorcado", "/assets/ahorcado.png", 
        "Adiviná cada letra de una palabra intergaláctica. Pero tené cuidado: ¡cada error pone a tu nave un poco más cerca del final de su travesía!",
        "Ahorcado espacial"  
      ),
      new HomeGameWindow (
        "/mayor-menor", "/assets/mayor-menor.png", 
        "Una baraja creada en un planeta lejano. Sacalas de a una. La siguiente: ¿será mayor?, ¿será menor? Sólo un viajero intrépido conoce la respuesta.",
        "Mayor o menor"  
      ),
      new HomeGameWindow (
        "/trivia", "/assets/trivia.png", 
        "Demostrá cuánto sabés del espacio conocido.",
        "Trivia galáctica"  
      )
    );
  }

}
