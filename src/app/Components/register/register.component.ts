import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {}

  Register() {

    this.auth.RegisterUser(this._email, this._password).then(
      
      (res) => {
        this.router.navigate(["/home"])
      }
      
    ).catch(
      (err) => console.log(err)
    );

  }

}
