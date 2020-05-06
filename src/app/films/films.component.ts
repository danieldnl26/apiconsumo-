import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: [];

  constructor(private filmsService: FilmsService) {
    this.films = [];
    this.getListFilms();
   }

   getListFilms(){
    this.filmsService.getFilms().subscribe(
      (data) => {
        console.log('DATA:', data);
        this.films = data ['results'] ;
      }
    );
    this.films;
   }

  ngOnInit(): void {
  }

}
