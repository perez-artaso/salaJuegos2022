import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoresRoutingModule } from './scores-routing.module';
import { ScoresTableComponent } from './components/scores-table/scores-table.component';


@NgModule({
  declarations: [
    ScoresTableComponent
  ],
  imports: [
    CommonModule,
    ScoresRoutingModule
  ]
})
export class ScoresModule { }
