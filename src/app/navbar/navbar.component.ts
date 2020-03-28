import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthenticationService } from '../shared/authentication.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  title = "Website Redesign";
  loggedIn = false;

  constructor(private afAuth: AngularFireAuth,
    public authService: AuthenticationService) {
  }

  ngOnInit() {
    // TODO: update
    // this.afAuth.user.subscribe(firebaseUser => {
    //   this.authService.setFirebaseUser(firebaseUser);
    // });
  }

  //TODO hook to new service
  // get userDisplayName(): string {
  //   return this.authService.isLoggedIn() ? this.userService.getUserDisplayName() : '';
  // }

  //TODO hook to new service
  // get isLoggedIn(): boolean {
  //   return !!this.authService.isLoggedIn();
  // }



  login() {

  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
