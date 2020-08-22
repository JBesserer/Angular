import { Component, OnInit } from '@angular/core';
import { Type } from '../models/type.model';
import { Observable } from 'rxjs';
import { TypeService } from './services/type.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  types$: Observable<Array<Type>>;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.types$ = this.typeService.getTypes();
  }

}
