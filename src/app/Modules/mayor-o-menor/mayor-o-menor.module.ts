import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayorOMenorRoutingModule } from './mayor-o-menor-routing.module';
import { MayorOMenorComponent } from './components/mayor-o-menor/mayor-o-menor.component';
import { CardComponent } from './components/card/card.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
import { SuitImgUrlPipe } from './pipes/suit-img-url.pipe';


@NgModule({
  declarations: [
    MayorOMenorComponent,
    CardComponent,
    CardDeckComponent,
    SuitImgUrlPipe
  ],
  imports: [
    CommonModule,
    MayorOMenorRoutingModule
  ]
})
export class MayorOMenorModule { }
