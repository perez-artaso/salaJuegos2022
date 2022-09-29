import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElCaminoComponent } from './components/el-camino/el-camino.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: ElCaminoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElCaminoRoutingModule { }
