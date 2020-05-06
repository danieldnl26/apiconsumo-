import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  {path: 'peliculas', component: FilmsComponent},
  {path: 'planetas', component: PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
