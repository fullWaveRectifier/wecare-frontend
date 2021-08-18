import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-home-page',
  templateUrl: './coach-home-page.component.html',
  styleUrls: ['./coach-home-page.component.css']
})
export class CoachHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem("userId"))
  }

}
