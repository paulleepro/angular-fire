import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  userData: Observable<firebase.User>;
  currentUser;

  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    this.userData.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  // getAuthState() {
  //   return this.authState;
  // }

  signUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  signIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  /* Sign out */
  signOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }

  // constructor(private router: Router, private auth: AngularFireAuth){}

  public redirectUrl = '';
  isLoggedIn = false;
  @Output() getLoggedInStatus: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.isLoggedIn = (localStorage.getItem('loggedin')) ? true : false;
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'user' && password === 'root') {
      this.getLoggedInStatus.emit(true);
      this.isLoggedIn = true;
      localStorage.setItem('loggedin', 'true');
      return of(true);
    } else {
      this.isLoggedIn = false;
      this.getLoggedInStatus.emit(false);
      return of(false);
    }
  }

  logout(): void {
    this.getLoggedInStatus.emit(false);
    this.isLoggedIn = false;
    console.log('logging out user');
    localStorage.removeItem('loggedin');
    this.router.navigate(['./login']);
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

}
