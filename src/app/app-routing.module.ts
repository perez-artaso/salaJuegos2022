import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {
    path: "", component: LoginFormComponent
  },
  {
    path: "about-me", component: AboutMeComponent
  },
  {
    path: "home", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
