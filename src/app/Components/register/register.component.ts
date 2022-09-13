import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationErrors } from 'src/app/Models/registration-errors';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public _email: string = "";
  public _password: string = "";
  public _passwordConfirmation: string = "";
  public errors: RegistrationErrors = new RegistrationErrors();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {}

  Register() {

    this.errors.ClearErrors();

    if (this._password == this._passwordConfirmation) {

      this.auth.RegisterUser(this._email, this._password).then(
      
        (res) => {
          this.router.navigate(["/home"])
        }
        
      ).catch(
        (err) => {
          
          if (err.code == "auth/email-already-in-use") {
  
            this.errors.EMAIL_EXISTS.ocurred = true;
  
          } else if (err.code == "auth/weak-password") {
  
            this.errors.WEAK_PASSWORD.ocurred = true;
  
          } else {

            this.errors.OTHER.message = err.message;
            this.errors.OTHER.ocurred = true;            
  
          }
  
        }
      );

    } else {

      this.errors.WRONG_PASSWORD_CONFIRMATION.ocurred = true;

    }    

  }

}
