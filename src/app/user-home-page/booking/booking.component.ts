import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookAppointmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.bookAppointmentForm = this.formBuilder.group({
      DateOfAppointment: ['',[Validators.required,validateDate]],
      Slot: ['',Validators.required]
    });
  }

}
//the date should be any upcoming 7 day
function validateDate(c: FormControl){
  let currentDate: Date = new Date();
  let formDate = c.value.split("/");
  let appointmentDate: Date = new Date(formDate[2]+"-"+formDate[0]+"-"+formDate[1]);
  if(appointmentDate.getMilliseconds() - currentDate.getMilliseconds() < 0){
      return{  dateInvalid: {
                    message:"the date should be any upcoming 7 days"
                  }
            }
  }else{
    let diff: number = appointmentDate.getMilliseconds() - currentDate.getMilliseconds();
    let numberOfDays: number = diff / (1000*60*60*24);
    if(numberOfDays>7){
      return{  dateInvalid: {
                              message:"the date should be any upcoming 7 days"
                            }
            }
    }
  }
  return null;
}
