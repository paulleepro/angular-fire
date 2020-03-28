import { Injectable, EventEmitter, Output } from '@angular/core';
//router for after user signs out
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../interfaces/user';
import { AlertService } from '../_alert/alert.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  public user$: Observable<User>;

  userData: Observable<firebase.User>;
  currentUser;

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private alertService: AlertService) {
    this.user$ = afAuth.authState.pipe(
      switchMap(user => {
        if (user) { //get info if it exists for a user
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else //or simply return O of null
          return of(null);
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);

  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    // getting data to update in firestore
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }

    //set is destructive - merge makes it only change what is needed
    return userRef.set(data, { merge: true })
  }

  /* Sign out */
  async signOut() {
    await this.afAuth
      .auth
      .signOut();
    return this.router.navigate(['/']);
  }
  // getAuthState() {
  //   return this.authState;
  // }

  signUp(email: string, password: string) {
    this.afAuth
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
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        this.alertService.error("Invalid credentials. Please recheck and try again.");
      });
  }




}
