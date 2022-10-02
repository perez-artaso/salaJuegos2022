import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoresTableComponent } from './components/scores-table/scores-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ScoresTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoresRoutingModule { }
