import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Survey } from '../../models/survey';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)])),
      favourite_game: new FormControl('unselected', Validators.compose([Validators.required, this.valid_favourite_game])),
      gender: new FormControl('other', Validators.required),
      played_all_games: new FormControl(false)
    }
  );

  constructor(private surveyService: SurveyService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  SendSurvey() {
    if (this.surveyForm.valid) {
      this.surveyService.addDocument(
        new Survey(
          this.auth.GetCurrentUserID(),
          Date.now().toString(), 
          this.surveyForm.get('name')?.value,
          this.surveyForm.get('last_name')?.value,
          this.surveyForm.get('phone_number')?.value,
          this.surveyForm.get('favourite_game')?.value,
          this.surveyForm.get('gender')?.value,
          this.surveyForm.get('played_all_games')?.value
        ).getLiteralObjectRepresentation()
      ).then( ()=> this.router.navigate(['/home']));
    } else {
      this.surveyForm.markAllAsTouched()
    }
  }

  private valid_favourite_game (control: FormControl)  {
    return ( control.value == 'unselected' ? {'valid_favourite_game': true} : null );
  }

  allHasBeenTouched() {
    return this.surveyForm.get('name')?.touched 
    && this.surveyForm.get('last_name')?.touched 
    && this.surveyForm.get('phone_number')?.touched 
    && this.surveyForm.get('favourite_game')?.touched 
    && this.surveyForm.get('gender')?.touched
    && this.surveyForm.get('played_all_games')?.touched
  }

}
