import { Injectable } from '@angular/core';
import { MarkerTag } from 'src/Classes/marker';


@Injectable({
  providedIn: 'root'
})
export class MarkerServiceService {

  constructor() { 

  }

  markers:MarkerTag[]=[];
  trips:string[]=["Góry","Śnieg"];
  marker:MarkerTag= new MarkerTag();


  public addMarker(marker:MarkerTag)
  {
    this.markers.push(marker);

  }

  public getMarkers()
  {
    return this.markers;
  }

  public makeInactiveMarker()
  {
    this.marker=null;
  }

  public getActiveMarker()
  {
    return this.marker;
  }
  public getTrips(){
    return this.trips;
  }
  public addTrip(trip:string){
    this.trips.push(trip);
    console.log(this.trips)
  }
}
