import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from '../services/coach.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css']
})
export class SignUpComponentComponent implements OnInit {

  type:string;
  coachregisterForm: FormGroup;
  userregisterForm:FormGroup;
  errorMessage: String;
  successMessage: String;
  constructor(private route:ActivatedRoute,private formBuilder: FormBuilder,
    private coachService: CoachService,private userService:UserService) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.coachregisterForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      password: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      date_of_birth: ['', this.validateDate],
      gender: ['', Validators.required],
      mobile_number: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      speciality: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(50)]]
    });

    this.userregisterForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      password: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      dateOfBirth: ['', this.validateDate],
      gender: ['', Validators.required],
      mobileNumber: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', Validators.required],
      pincode: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      city: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      state: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      country: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]
    });
  }
  coachregister()
  {
    console.log(this.coachregisterForm.value);
    this.coachService.coachRegister(this.coachregisterForm.value)
    .subscribe((resp) =>{ console.log("sam"); this.successMessage = resp.message},
    
     (err: any) => this.errorMessage = err.error.message);

  }

  userregister()
  {
    console.log(this.userregisterForm.value);
    this.userService.userRegister(this.userregisterForm.value).subscribe(
      (resp)=>this.successMessage=resp.message,
      (err)=>this.errorMessage=err.error.message);
      if(this.successMessage!=undefined)
      {
        console.log("sam");
      }
      else{
        console.log("fff")
        console.log(this.successMessage);
      }
      

  }

  validateDate(c: FormControl){
    let currentDate: Date = new Date();
    let dob: Date = new Date(c.value);
    
      let diff: number = currentDate.getTime() - dob.getTime();
      let numberOfyear: number = diff / (1000*60*60*24*365);
      if(numberOfyear<20 || numberOfyear>100){
        return{  dateInvalid: {
                                message:"Age should be between 20 and 100 years"
                              }
              }
      }
    
    return null;
  }
}
