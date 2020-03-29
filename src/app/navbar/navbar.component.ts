import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  title = "Website Redesign";
  isLoggedIn = false;

  constructor(private afAuth: AngularFireAuth,
    public authService: AuthenticationService) {
  }

  ngOnInit() {
    // TODO: update
    // this.afAuth.user.subscribe(firebaseUser => {
    //   this.authService.setFirebaseUser(firebaseUser);
    // });

    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    });
  }


  logout() {
    this.isLoggedIn = false;
    this.afAuth.auth.signOut();
  }
}



// TODO hook to new service
// get userDisplayName(): string {
//   return this.authService.isisLoggedIn() ? this.userService.getUserDisplayName() : '';
// }

