import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/states/app.state';
import { Temtem } from 'src/app/models/temtem.model';
import { Observable, of, Subscription } from 'rxjs';
import { withLatestFrom, switchMap, toArray, map, tap, filter } from 'rxjs/operators';
import { selectTemtem, selectTemtemListForType, selectTemtemList } from 'src/app/store/selectors/temtem.selectors';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'app-temtem-page',
  templateUrl: './temtem-page.component.html',
  styleUrls: ['./temtem-page.component.scss']
})
export class TemtemPageComponent implements OnInit {
  temtem$: Observable<Temtem>;
  temtemsStats$: Subscription;

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['ATK', 'DEF', 'HP', 'SPATK', 'SPD', 'SPDEF', 'STA'];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: 'Base Stats' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Average Base Stats' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor(private route: ActivatedRoute,
              private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.temtem$ = this.route.params.pipe(
      switchMap((params) => this.store.select(selectTemtem, {id: +params.id}))
    ).pipe(
      tap(temtem => console.log(temtem)),
      filter(temtem => temtem !== undefined),
      tap(temtem => {
        this.radarChartData[0].data = [temtem.stats.atk,
                                      temtem.stats.def,
                                      temtem.stats.hp,
                                      temtem.stats.spatk,
                                      temtem.stats.spd,
                                      temtem.stats.spdef,
                                      temtem.stats.sta];
      })
    );

    this.temtemsStats$ = this.store.select(selectTemtemList).pipe(
      filter(temtems => temtems !== null)
    ).subscribe(temtems => {
      this.radarChartData[1].data = [this.calculateAverage(temtems.map(temtem => temtem.stats.atk)),
        this.calculateAverage(temtems.map(temtem => temtem.stats.def)),
        this.calculateAverage(temtems.map(temtem => temtem.stats.hp)),
        this.calculateAverage(temtems.map(temtem => temtem.stats.spatk)),
        this.calculateAverage(temtems.map(temtem => temtem.stats.spd)),
        this.calculateAverage(temtems.map(temtem => temtem.stats.spdef)),
        this.calculateAverage(temtems.map(temtem => temtem.stats.sta))];
    });
  }

  calculateAverage(stats: Array<number>): number {
    return Math.ceil(stats.reduce((sum, current) => sum + current, 0) / stats.length);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
