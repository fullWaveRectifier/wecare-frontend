import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachHomePageComponent } from './coach-home-page/coach-home-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

const routes: Routes = [
  {path:'home',component:HomeComponentComponent},
  {path:'login/:type', component:LogInComponentComponent},
  {path:'userhome', component:UserHomePageComponent},
  {path:'signup/:type', component:SignUpComponentComponent},
  {path:'coachhome',component:CoachHomePageComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
