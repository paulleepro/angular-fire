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
    private userService: UserService) {
  }

  ngOnInit() {
    this.afAuth.user.subscribe(firebaseUser => {
      this.userService.setFirebaseUser(firebaseUser);
    });
  }

  get userDisplayName(): string {
    return this.userService.isLoggedIn() ? this.userService.getUserDisplayName() : '';
  }

  get isLoggedIn(): boolean {
    return !!this.userService.isLoggedIn();
  }



  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
