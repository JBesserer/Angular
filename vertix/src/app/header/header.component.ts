import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, toArray, filter, map, startWith } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/states/app.state';
import { selectTemtemList } from '../store/selectors/temtem.selectors';
import { Temtem } from '../models/temtem.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  options$: Observable<Array<Temtem>>;
  filteredOptions$: Observable<Array<Temtem>>;
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.options$ = this.filteredOptions$ = this.store.select(selectTemtemList);
  }

  _filter(value: string): void {
    const filterValue = value.toLowerCase();

    this.filteredOptions$ = this.options$.pipe(
      map(options => options.filter(option => option.name.toLowerCase().includes(filterValue)))
    );
  }

  selected(value: any): void {
    this.myControl.setValue(null);
  }
}
