import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosBanderasRoutingModule } from './preguntados-banderas-routing.module';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';


@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  imports: [
    CommonModule,
    PreguntadosBanderasRoutingModule
  ]
})
export class PreguntadosBanderasModule { }
