import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PicturesService } from '../../services/pictures.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnChanges{

  images:any[];
  filterBy?: string = 'all'
  visibleImages:any[] = [];

  constructor(private picturesService: PicturesService) {
    console.log(this.filterBy)
    this.visibleImages = this.picturesService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.picturesService.getImages();
  }

    
}
