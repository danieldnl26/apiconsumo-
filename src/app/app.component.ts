import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { FilmsComponent } from './films/films.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwars';

  ngOnInit() {
  }

}
