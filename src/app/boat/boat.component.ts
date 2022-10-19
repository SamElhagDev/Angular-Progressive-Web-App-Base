import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs'

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss']
})
export class BoatComponent implements OnInit {
  constructor() { }

  clicked = false;

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


  ngOnInit(): void {
  }


}
