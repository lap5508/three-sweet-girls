import { Component, OnInit } from '@angular/core';
import { HomePageConstants } from './home-page-constants.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(public labelConstants: HomePageConstants) { }

  ngOnInit() {
  }

}
