import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { CoachHomePageComponent } from './coach-home-page/coach-home-page.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserViewProfileComponent } from './user-home-page/user-view-profile/user-view-profile.component';
import { BookingComponent } from './user-home-page/booking/booking.component';
import { RescheduleComponent } from './user-home-page/reschedule/reschedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SignUpComponentComponent,
    LogInComponentComponent,
    CoachHomePageComponent,
    UserHomePageComponent,
    BookingComponent,
    RescheduleComponent,
    UserViewProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
