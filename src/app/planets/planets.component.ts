import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: [];

  constructor(private planetsService: PlanetsService) {
    this.planets = [];
    this.getListPlanets();
   }

   getListPlanets(){
    this.planetsService.getPlanets().subscribe(
      (data) => {
        console.log('DATA:', data);
        this.planets = data ['results'] ;
      }
    );
    this.planets;
   }

  ngOnInit(): void {
  }

}
