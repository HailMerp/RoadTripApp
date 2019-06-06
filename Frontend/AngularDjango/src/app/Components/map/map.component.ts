
import { Component, OnInit, ɵConsole } from '@angular/core';



import { google, Marker } from '@agm/core/services/google-maps-types';
import { ShowMapWindowComponent } from '../show-map-window/show-map-window.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MarkerServiceService } from 'src/app/services/marker-service.service';
import { MarkerTag } from 'src/Classes/marker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  isDeletable:boolean=false;
  isAddOn=true;
  newTripName:string = ""
  task:string="Modify";
  invalidInput: boolean=false;

  title = 'ProjektChmura';
  lat: number = 51.678418;
  lng: number = 7.809007;
  selectedMarker;


  markers:MarkerTag[]=[] ;

  constructor(
    private modalService: NgbModal, private markerService:MarkerServiceService, public router: Router
  ) { 
    
  }

  ngOnInit() {
    this.markers=this.markerService.markers;
  }

  Remove()
  {
    this.task="Remove";
    this.isDeletable=true;
    this.isAddOn=false;
  }

  Modify()
  {
    this.task="Modify";
  }

  Add()
  {
    this.task="Add";
    this.isDeletable=false;
    this.isAddOn=true;
  }
  Submit(){
    if(this.newTripName){
    this.markerService.addTrip(this.newTripName)
    this.invalidInput=false;
    this.router.navigate(['/home']);}
    else
    this.invalidInput=true;

  
    
  }
  addMarker(lat: number, lng: number) {
    if(this.task=="Add") 
      {
        this.lat=lat;
        this.lng=lng;
      //this.markers.push({ lat, lng, alpha: 0.4 }); 
      this.openDialog(true);
    }  
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }


  selectMarker(event) {
  
    if(this.task=="Remove"){
      this.markers = this.markers.filter(function( markers ) {
        return markers.latitude !== event.latitude && markers.longitude !== event.longitude;
      });
    }
  }
  onChangeTripName(event){
    this.newTripName=event.target.value;
  }
  public openDialog(visible: boolean): ShowMapWindowComponent {
    let options: NgbModalOptions = {}
    // options.size += "m";
    options.windowClass = "bosch-external-redirection-dialog";
    if (!visible) {
      options.windowClass += " hidden";
    }
    let modalRef = this.modalService.open(ShowMapWindowComponent, options);
    let component = modalRef.componentInstance;
    component.Visible = visible;
    component.RootComponent = this;
    return component;
  }

}
