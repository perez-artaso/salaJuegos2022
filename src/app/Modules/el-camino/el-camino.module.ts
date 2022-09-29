import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElCaminoRoutingModule } from './el-camino-routing.module';
import { ElCaminoComponent } from './components/el-camino/el-camino.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { DPadComponent } from './components/d-pad/d-pad.component';
import { RoadblockPipe } from './pipes/roadblock.pipe';


@NgModule({
  declarations: [
    ElCaminoComponent,
    BoardComponent,
    SquareComponent,
    DPadComponent,
    RoadblockPipe
  ],
  imports: [
    CommonModule,
    ElCaminoRoutingModule
  ]
})
export class ElCaminoModule { }
