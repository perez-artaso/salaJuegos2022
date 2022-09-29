import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private newBoardNotifier$: Subject<void> = new Subject();
  private lightsNotifier$: Subject<boolean> = new Subject();

  constructor() { }

  NewBoardRequest() {
    return this.newBoardNotifier$;
  }

  AskForNewBoard() {
    this.newBoardNotifier$.next();
  }

  LightsRequest () {
    return this.lightsNotifier$;
  }

  AskForLights(lightsOn: boolean) {
    this.lightsNotifier$.next(lightsOn);
  }

}
