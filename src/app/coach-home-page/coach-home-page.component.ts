import { Component, OnInit } from '@angular/core';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-home-page',
  templateUrl: './coach-home-page.component.html',
  styleUrls: ['./coach-home-page.component.css']
})
export class CoachHomePageComponent implements OnInit {
  appointments
  userId
  
  isAppointmentspresent: boolean = false
  constructor(private coachService:CoachService) {
    this.userId=localStorage.getItem("userId")
    coachService.getCoachSchedule(this.userId).subscribe((success)=>{
      this.appointments=success
      this.isAppointmentspresent=this.appointments.length>0
    })
   }

  ngOnInit(): void {
    console.log(localStorage.getItem("userId"))
    this.appointments = [
      
    ]
    this.isAppointmentspresent = this.appointments.length >0
  }

}
