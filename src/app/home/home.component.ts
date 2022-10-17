import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';
import { of } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  clicked = false;
  title = `Angular ${VERSION.full} is rad`;

  boats = 
  of([
    {
      name:'Starfire',
      year: 1977,
      img:'assets/boat.jpg'
    },
    {
      name:'Starfire2',
      year: 1978,
      img:'assets/boat2.jpg'
    }
 ]);

 changeTitle()
 {
    document.querySelector('#title')!.innerHTML = 'Touched the DOM!';
 }



  handleClick() {
    this.clicked = true;
    this.changeTitle();
  }

  ngOnInit(): void {
  }

}
