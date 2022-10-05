import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './components/survey/survey.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ReactiveFormsModule
  ]
})
export class SurveyModule { }
