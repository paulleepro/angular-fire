import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  title = "Website Redesign";
  loggedIn = false;

  constructor(public auth: AngularFireAuth, private authservice: AuthenticationService) {
  }

  ngOnInit() {
    // this.authService.getLoggedInStatus.subscribe(status => this.loggedIn=status);
  }

  login() {

  }

  logout() {
    // this.loggedIn = false;
    // this.authService.logout();
  }
}
