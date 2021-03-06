import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { Router } from '@angular/router';
import { MarkerServiceService } from 'src/app/services/marker-service.service';
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

  constructor(public router: Router,
      private makerService: MarkerServiceService) { }

  visible:string;

  trips:string[];

  ngOnInit() {
    this.visible="start";
    this.trips=this.makerService.getTrips();
    
  }
  
  showPlan()
  {
    
    this.visible="show";
    console.log(this.visible);
  }

  addMap()
  {
    this.visible="map";
  }

}