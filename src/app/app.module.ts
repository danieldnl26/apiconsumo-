import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { FilmsComponent } from './films/films.component';
import { FilmsService } from './services/films.service';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsService } from './services/planets.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    FilmsComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FilmsService, PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
