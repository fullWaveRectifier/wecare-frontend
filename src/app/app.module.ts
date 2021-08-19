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
<<<<<<< HEAD
import { AppointmentsComponent } from './user-home-page/appointments/appointments.component';
=======
import { CoachViewProfileComponent } from './coach-home-page/coach-view-profile/coach-view-profile.component';
>>>>>>> 8d2dbe35da54a95170c2bcb27fbbd93a87c631e2

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
<<<<<<< HEAD
    AppointmentsComponent,
=======
    CoachViewProfileComponent,
>>>>>>> 8d2dbe35da54a95170c2bcb27fbbd93a87c631e2
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
