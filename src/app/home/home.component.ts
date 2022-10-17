import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  clicked = false;
  title = `Angular ${VERSION.full} is rad`;

  handleClick() {
    this.clicked = true;
  }

  ngOnInit(): void {
  }

}
