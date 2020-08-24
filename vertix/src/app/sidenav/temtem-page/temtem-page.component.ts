import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/states/app.state';
import { Temtem } from 'src/app/models/temtem.model';
import { Observable, of, Subscription, timer } from 'rxjs';
import { withLatestFrom, switchMap, toArray, map, tap, filter, take } from 'rxjs/operators';
import { selectTemtem, selectTemtemListForType, selectTemtemList } from 'src/app/store/selectors/temtem.selectors';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'app-temtem-page',
  templateUrl: './temtem-page.component.html',
  styleUrls: ['./temtem-page.component.scss']
})
export class TemtemPageComponent implements OnInit, OnDestroy {
  temtem$: Observable<Temtem>;
  temtems$: Observable<Array<Temtem>>;
  temtemsSubscription: Subscription;
  temtems: Array<Temtem>;
  temtem: Temtem;

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
      angleLines: {
          display: false
      },
      ticks: {
          suggestedMin: 0,
          suggestedMax: 100
      }
    }
  };
  public radarChartLabels: Label[] = ['ATK', 'DEF', 'HP', 'SPATK', 'SPD', 'SPDEF', 'STA'];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: 'Base Stats' },
    { data: [], label: 'Average Base Stats' },
  ];
  public radarChartType: ChartType = 'radar';

  constructor(private route: ActivatedRoute,
              private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.temtem$ = this.route.params.pipe(
      switchMap((params) => this.store.select(selectTemtem, {id: +params.id})),
    ).pipe(
      filter(temtem => temtem !== undefined),
      tap(temtem => {
        this.temtem = temtem;
        this.radarChartData[0].data = [temtem.stats.atk,
                                      temtem.stats.def,
                                      temtem.stats.hp,
                                      temtem.stats.spatk,
                                      temtem.stats.spd,
                                      temtem.stats.spdef,
                                      temtem.stats.sta];
        if (this.radarChartData[1].label === 'Average Base Stats') {
            this.averageForAll();
          } else {
            this.averageForType();
          }
      })
    );

    this.temtemsSubscription = this.store.select(selectTemtemList).pipe(
      filter(temtems => temtems !== null)
    ).subscribe(temtems => {
      this.temtems = temtems;
      console.log(this.temtems);
    });
  }

  averageForType(): void {
    const tempTemTems = this.temtems.filter(temtem => temtem.types.some( type => this.temtem.types.indexOf(type) !== -1));
    this.radarChartData[1].data = [this.calculateAverage(tempTemTems.map(temtem => temtem.stats.atk)),
      this.calculateAverage(tempTemTems.map(temtem => temtem.stats.def)),
      this.calculateAverage(tempTemTems.map(temtem => temtem.stats.hp)),
      this.calculateAverage(tempTemTems.map(temtem => temtem.stats.spatk)),
      this.calculateAverage(tempTemTems.map(temtem => temtem.stats.spd)),
      this.calculateAverage(tempTemTems.map(temtem => temtem.stats.spdef)),
      this.calculateAverage(tempTemTems.map(temtem => temtem.stats.sta))];
    this.radarChartData[1].label = 'Average Base Stats For Type';
  }

  averageForAll(): void {
    this.radarChartData[1].data = [this.calculateAverage(this.temtems.map(temtem => temtem.stats.atk)),
      this.calculateAverage(this.temtems.map(temtem => temtem.stats.def)),
      this.calculateAverage(this.temtems.map(temtem => temtem.stats.hp)),
      this.calculateAverage(this.temtems.map(temtem => temtem.stats.spatk)),
      this.calculateAverage(this.temtems.map(temtem => temtem.stats.spd)),
      this.calculateAverage(this.temtems.map(temtem => temtem.stats.spdef)),
      this.calculateAverage(this.temtems.map(temtem => temtem.stats.sta))];
    this.radarChartData[1].label = 'Average Base Stats';
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

  ngOnDestroy(): void{
    console.log('BY FIRE BE PURGED!');
    this.temtemsSubscription.unsubscribe();
  }
}
