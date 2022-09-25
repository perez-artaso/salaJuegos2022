import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { RegisterComponent } from './Components/register/register.component';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'chat', pathMatch: 'full'
  },
  {
    path: "about-me", component: AboutMeComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginFormComponent
  },
  {
    path: "chat", loadChildren: () => import('./Modules/chat/chat.module').then(m=>m.ChatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }