import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  links: Array<string> = ['Neutral', 'Fire', 'Water', 'Nature', 'Electric', 'Earth', 'Mental', 'Wind', 'Digital', 'Melee', 'Crystal', 'Toxic'];
  constructor() { }

  ngOnInit(): void {
  }

}
