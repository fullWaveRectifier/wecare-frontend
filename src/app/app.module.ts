import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { CoachHomePageComponent } from './coach-home-page/coach-home-page.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SignUpComponentComponent,
    LogInComponentComponent,
    CoachHomePageComponent,
    UserHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
