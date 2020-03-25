import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// tslint:disable-next-line: quotemark
import { NavbarComponent } from "./navbar/navbar.component";
import { NotfoundComponent } from './notfound/notfound.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    CoursesListComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    // WelcomeComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
