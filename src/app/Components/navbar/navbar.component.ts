import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public dropdownLabel = "Quién Sos";
  public user: firebase.default.User | null = null;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.auth.UserActivity().subscribe(

      (user: firebase.default.User | null) => {
        this.user = user;
        if (user) {
          this.dropdownLabel = user.email != null ? user.email : "Quién Sos";
        } else {
          this.dropdownLabel = "Quién Sos";
        }
      }

    );

  }

  LogOut() {
    this.auth.LogOut();
    this.router.navigate(["/"]);
  }

}
