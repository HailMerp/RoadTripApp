import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { }  from '@angular/material';
import { PicturesService } from 'src/app/services/pictures.service';
import { MarkerServiceService } from 'src/app/services/marker-service.service';
import { MarkerTag } from 'src/Classes/marker';
import { MapComponent } from '../map/map.component';


@Component({
  selector: 'app-show-map-window',
  templateUrl: './show-map-window.component.html',
  styleUrls: ['./show-map-window.component.css']
})
export class ShowMapWindowComponent implements OnInit {
  RootComponent: MapComponent;
  selectedFile: File;

  marker:MarkerTag= new MarkerTag();

  tag:string;

  description:string;

  options:string[]=['lalala','sds'];

  constructor(
    public pictureService:PicturesService,
    public markerService:MarkerServiceService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onFileChanged(event) {
    console.log(event.target.files[0] instanceof Blob)
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    
    this.pictureService.uploadImage(this.selectedFile);
  }

  createtag()
  { this.marker.latitude = this.RootComponent.lat;
    this.marker.longitude = this.RootComponent.lng;
    this.marker.tag=this.tag;
    this.marker.description=this.description;
    this.RootComponent.markers.push(this.marker);
    console.log(this.RootComponent.markers);
  }

  cancel()
  {
    this.markerService.makeInactiveMarker();
  }

}
