import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmComponent } from '../film/film.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films =[
    {"id":1, "category": "krajobraz", "caption": "View from the boat", "url":"../../../assets/movies/1.mp4"},
    {"id":2, "category": "architektura", "caption": "Sailing the coast", "url":"../../../assets/movies/2.mp4"},
    {"id":3, "category": "architektura", "caption": "The water was nice", "url":"../../../assets/movies/3.mp4"},
    {"id":4, "category": "krajobraz", "caption": "Cool water cavern", "url":"../../../assets/movies/4.mp4"}


  ]
 
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openModal(movieId) {
    this.modalService.open(FilmComponent);
}

closeModal(id: string) {
    this.modalService.dismissAll()
}
}
