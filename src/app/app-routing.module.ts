import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourseAddFormComponent } from './course-add-form/course-add-form.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';


const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  { path: "welcome", component: WelcomeComponent },
  //  { path: "about", component: AboutComponent },

  {
    path: "about", component: AboutComponent
  },


{
    path: "courses", //Angular 8 Notation with Promise
    component: CoursesListComponent
    },

    {
      path: "course-add", //Angular 8 Notation with Promise
      component: CourseAddFormComponent
      },

    {
      path: "courses/:id", component: CourseDetailComponent

    },



    { path: "**", component: NotfoundComponent, pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
