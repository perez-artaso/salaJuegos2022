import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { LoginLogsService } from 'src/app/Services/login-logs.service';
import { LoginLog } from 'src/app/Models/login-log';
import { Router } from '@angular/router';
import { LoginErrors } from 'src/app/Models/login-errors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  _email: string = "";
  _password: string = "";

  errors: LoginErrors = new LoginErrors();

  constructor(private auth: AuthService, private loginLogs: LoginLogsService, private router: Router) { }

  ngOnInit(): void {
    
  }

  login() {
    this.auth.Login(this._email, this._password).then(
      (res) => {
        
        this.loginLogs.addDocument(
          new LoginLog (this._email, Date.now().toString()).getLiteralObjectRepresentation()
        );

        if ( res.user != null ) {
          this.auth.SetCurrentUser(res.user);
        }

        this.router.navigate(["/home"]);

      }
    ).catch(

      (err) => {

        this.errors.ClearErrors();

        if ( this.RequiredFieldsFilled() ) {
          
          if (err.code == "auth/invalid-email") {

            this.errors.INVALID_EMAIL.ocurred = true;
  
          } else if (err.code == "auth/wrong-password") {
  
            this.errors.WRONG_PASSWORD.ocurred = true;
  
          }else if (err.code == "auth/user-not-found") {
  
            this.errors.USER_NOT_FOUND.ocurred = true;
  
          } else {
  
            this.errors.OTHER.message = err.message;
            this.errors.OTHER.ocurred = true;            
  
          }
        }
        
      }
      
    );
  }

  access() {
    this._email = "test_user@rayoespacial.com";
    this._password = "123456";
  }

  RequiredFieldsFilled(): boolean {

    if (this._email == "") {
      this.errors.EMAIL_REQUIRED.ocurred = true;
      return false;
    } else if (this._password == "") {
      this.errors.PASSWORD_REQUIRED.ocurred = true;
      return false;
    }

    return true;

  }

}