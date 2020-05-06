import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private httpCliente: HttpClient) { }

  getFilms(){
    return this.httpCliente.get("http://swapi.dev/api/planets/");
  }


}
