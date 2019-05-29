
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  isDeletable:boolean=false;
  isAddOn=true;

  title = 'ProjektChmura';
  lat: number = 51.678418;
  lng: number = 7.809007;
  selectedMarker;

  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 22.33159, lng: 105.63233, alpha: 1 },
    { lat: 7.92658, lng: -12.05228, alpha: 1 },
    { lat: 48.75606, lng: -118.859, alpha: 1 },
    { lat: 5.19334, lng: -67.03352, alpha: 1 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 }
  ];

  constructor() { }

  ngOnInit() {
  }

  Remove()
  {
    this.isDeletable=true;
    this.isAddOn=false;
  }

  Add()
  {
    this.isDeletable=false;
    this.isAddOn=true;
  }

  addMarker(lat: number, lng: number) {
    if(this.isAddOn==true) this.markers.push({ lat, lng, alpha: 0.4 });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };

   if(this.isDeletable==true) 
      for( var i = 0; i < this.markers.length; i++){ 
      
      let markerItem= this.markers[i];

      if ( markerItem.lat == this.selectedMarker.lat && markerItem.lng == this.selectedMarker.lng ) {
        this.markers.splice(i, 1); 
      }
   }
   


  }

}
