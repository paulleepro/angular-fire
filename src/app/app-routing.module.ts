import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  { path: "welcome", component: WelcomeComponent },
  //  { path: "about", component: AboutComponent },

  {
    path: "about", component: AboutComponent
  },

  // Before Angular 8
  // { path: "about", loadChildren: './about/about.module#AboutModule' },



  // { path: "albums", component: AlbumListComponent },
  {
    path: "courses", //Angular 8 Notation with Promise
    component: CoursesListComponent
    // canActivate: [AuthGuard],
    // loadChildren: () => import('./albums/albums.module')
    //   .then(mod => {
    //     console.log('in promise loadChildren');
    //     return mod.AlbumsModule;
    //   }),
  },
  // //Before Angular 8
  // { path: "observables", loadChildren: './observables/observables.module#ObservablesModule' },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
