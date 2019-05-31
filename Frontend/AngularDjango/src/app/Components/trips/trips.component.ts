import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-1000%)'}))
      ])
    ])
  ]
})

export class TripsComponent implements OnInit {

  constructor() { }

  visible:boolean;

  ngOnInit() {
    this.visible=true;
  }
  
  showPlan()
  {
    
    this.visible=false;
    console.log(this.visible);
  }

}