import { Component, OnInit } from '@angular/core';
import { Type } from '../models/type.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  links: Array<Type> = 
    [new Type('Neutral', 'neutral'), new Type('Fire', 'fire'), new Type('Water', 'water'), new Type('Nature', 'nature'), new Type('Electric', 'electric'), new Type('Earth', 'earth'), new Type('Mental', 'mental'), new Type('Wind', 'wind'), new Type('Digital', 'digital'), new Type('Melee', 'melee') , new Type('Crystal', 'crystal'), new Type('Toxic', 'toxic')];
  constructor() { }

  ngOnInit(): void {
  }

}
