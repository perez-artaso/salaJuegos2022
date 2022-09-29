import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { OnscreenKeyboardComponent } from './components/onscreen-keyboard/onscreen-keyboard.component';
import { KeyComponent } from './components/key/key.component';


@NgModule({
  declarations: [
    AhorcadoComponent,
    OnscreenKeyboardComponent,
    KeyComponent
  ],
  imports: [
    CommonModule,
    AhorcadoRoutingModule
  ]
})
export class AhorcadoModule { }
