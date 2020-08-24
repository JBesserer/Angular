import { Component, OnInit } from '@angular/core';
import { Type } from '../models/type.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/states/app.state';
import { GetTemtems } from '../store/actions/temtem.actions';
import { GetTypes } from '../store/actions/type.actions';
import { selectTypesList } from '../store/selectors/type.selectors';
import { GetWeaknesses } from '../store/actions/weakness.actions';
import { GetTechniques } from '../store/actions/technique.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  types$: Observable<Array<Type>> = this.store.select(selectTypesList);

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTypes());
    this.store.dispatch(new GetWeaknesses());
    this.store.dispatch(new GetTemtems());
    this.store.dispatch(new GetTechniques());
  }
}
