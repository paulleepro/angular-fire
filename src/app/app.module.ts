import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// tslint:disable-next-line: quotemark
import { NavbarComponent } from "./navbar/navbar.component";
import { NotfoundComponent } from './notfound/notfound.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CourseComponent } from './course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { MatSliderModule } from '@angular/material/slider';

// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    CoursesListComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    LoadingSpinnerComponent,
    CourseComponent,
    AddressFormComponent,
    FooterComponent]
   ,
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),

    // FirestoreModule is needed for the database features like working with collections, queries, and services for data streaming and manipulation.

    // FireAuthModule is needed for authentication features like monitoring authentication state, Log-in providers and security.

    // FireDatabaseModule allows us to work with Realtime databases. It’s very efficient for mobile and web apps that require synced states across clients in Realtime.

    // AngularFireStorageModule. You can use this module to quickly and easily store and serve user-generated content like photos and videos as well as monitor uploads and metadata associated with files.

  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  // AngularFireAnalyticsModule,

  ReactiveFormsModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
