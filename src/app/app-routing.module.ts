import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourseAddFormComponent } from './courses/course-add-form/course-add-form.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { EditCourseResolver } from './courses/course-detail/edit-course.resolver';
import { UserLandingComponent } from './users/user-landing/user-landing.component';
import { AuthGuard } from './services/guards/auth.guard';
import { AccountInfoComponent } from './accounts/account-info/account-info.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  { path: "welcome", component: WelcomeComponent },
  //  { path: "about", component: AboutComponent },

  {
    path: "about", component: AboutComponent
  },

  {
    path: "team", component: TeamComponent
  },

  {
    path: "account",
    component: AccountInfoComponent,
    canActivate: [AuthGuard]

  },


  {
    path: "courses", //Angular 8 Notation with Promise
    loadChildren: () => import('./courses/courses.module')
      .then(mod => {
        console.log('in promise loadChildren');
        return mod.CoursesModule;
      })
  },


  { path: "**", component: NotfoundComponent, pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
