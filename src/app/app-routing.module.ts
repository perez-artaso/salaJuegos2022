import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './Guards/auth.guard';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: "about-me", component: AboutMeComponent
  },
  {
    path: "home", component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginFormComponent
  },
  {
    path: "chat", loadChildren: () => import('./Modules/chat/chat.module').then(m=>m.ChatModule), canActivate: [AuthGuard]
  },
  {
    path: "ahorcado", loadChildren: () => import('./Modules/ahorcado/ahorcado.module').then(m=>m.AhorcadoModule), canActivate: [AuthGuard]
  },
  {
    path: "mayor-o-menor", loadChildren: () => import('./Modules/mayor-o-menor/mayor-o-menor.module').then(m=>m.MayorOMenorModule), canActivate: [AuthGuard]
  },
  {
    path: "preguntados-banderas", loadChildren: () => import('./Modules/preguntados-banderas/preguntados-banderas.module').then(m=>m.PreguntadosBanderasModule), canActivate: [AuthGuard]
  },
  {
    path: "el-camino", loadChildren: () => import('./Modules/el-camino/el-camino.module').then(m=>m.ElCaminoModule), canActivate: [AuthGuard]
  },
  {
    path: "scores", loadChildren: () => import('./Modules/scores/scores.module').then(m=>m.ScoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }