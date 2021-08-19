import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from '../models/coach.model';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  coaches: Coach[] = [];

  constructor(private route:ActivatedRoute, private router:Router, private coachservice: CoachService) {
  
   }

  ngOnInit(): void {
    this.getAllCoaches();
    const userId = localStorage.getItem("userId");
    if(!userId) this.router.navigate(["/login/user"])
  }

  getAllCoaches() {
     this.coachservice.getAllCoaches().subscribe((result)=>{
       console.log(result)
       this.coaches = result;
     })
  }
}

  