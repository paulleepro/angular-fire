import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from './_alert';

// tslint:disable-next-line: quotemark
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { UsersModule } from './users/users.module';
import { AuthorComponent } from './authors/author/author.component';
import { AccountsModule } from './accounts/accounts.module';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireStorage } from '@angular/fire/storage';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		NotfoundComponent,
		WelcomeComponent,
		AboutComponent,
		LoadingSpinnerComponent,
		FooterComponent,
		AuthorComponent
	],
	imports: [
		BrowserModule,
		SharedModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AlertModule,
		AccountsModule,
		CoursesModule,
		UsersModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		AngularFireStorage
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
