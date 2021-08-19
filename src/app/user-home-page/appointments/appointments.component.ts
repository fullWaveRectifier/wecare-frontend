import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments
  userId
  isAppointmentspresent: boolean = false

  constructor(private userService:UserService) {
    this.userId=localStorage.getItem("userId")
    userService.getUserAppointments(this.userId).subscribe((success)=>{
      this.appointments=success
      this.isAppointmentspresent=this.appointments.length>0
    })
   }

  ngOnInit() {

  //   this.appointments=
  //   [
  //   {
  //       "bookingId":0,
  //       "coachId":"1",
  //       "userId":"1",
  //       "slot":"2-3",
  //       "appointmentDate":"2018-06-14"
  //   }
  //   ]
  //   this.isAppointmentspresent=this.appointments.length>0
   }
}
