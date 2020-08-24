import { Component, OnInit, Input } from '@angular/core';
import { Technique } from 'src/app/models/technique.model';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Type } from 'src/app/models/type.model';

@Component({
  selector: 'app-technique-table',
  templateUrl: './technique-table.component.html',
  styleUrls: ['./technique-table.component.scss']
})
export class TechniqueTableComponent implements OnInit {
  @Input()  datasource$: Observable<Array<Technique>>;
  @Input()  types: Array<Type> = new Array<Type>();
  displayedColumns: string[] = ['name', 'type', 'dmg', 'sta', 'hold', 'priority'];

  constructor() { }

  ngOnInit(): void {
  }

  findIcon(weaknessType: string, types: Array<Type>): string {
    let iconValue: string;
    types.forEach(type => {
      if (type.name === weaknessType){
        iconValue = type.icon;
      }
    });
    return iconValue;
  }

  sortData(sort: Sort): void {
    function compare(a: number | string, b: number | string, isAsc: boolean): number {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    this.datasource$ = this.datasource$.pipe(
      map(techniques => techniques.sort((a, b) => {
        let isAsc = sort.direction === 'asc';
        if (sort.direction === '') { sort.active = 'name'; isAsc = true; }
        switch (sort.active) {
          case 'name': return compare(a.name, b.name, isAsc);
          case 'type': return compare(a.type, b.type, isAsc);
          case 'dmg': return compare(a.damage, b.damage, isAsc);
          case 'sta': return compare(a.staminaCost, b.staminaCost, isAsc);
          case 'hold': return compare(a.hold, b.hold, isAsc);
          case 'priority': return compare(a.priority, b.priority, isAsc);
          default: return 0;
        }
      }))
    );
  }
}
