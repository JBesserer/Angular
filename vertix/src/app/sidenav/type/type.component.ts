import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TypeService } from '../services/type.service';
import { TypeMetadata } from 'src/app/models/type-metadata.model';
import { Observable, Subscription, combineLatest, of, forkJoin } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { Weakness } from 'src/app/models/weakness.model';
import { map, mergeMap, concatMap, concat } from 'rxjs/operators';
import { WeaknessService } from '../services/weakness.service';
import { Type } from 'src/app/models/type.model';
import { TypeEnum } from '../../enums/type.enum';
import { stringify } from '@angular/compiler/src/util';
import { TemtemService } from '../services/temtem.service';
import { Temtem } from 'src/app/models/temtem.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit, OnDestroy {
  temtems$: Observable<Array<Temtem>>;
  effectiveTypes: Array<Type> = new Array<Type>();
  ineffectiveTypes: Array<Type> = new Array<Type>();
  resistantTypes: Array<Type> = new Array<Type>();
  weakTypes: Array<Type> = new Array<Type>();
  type: string;
  subscriptions: Subscription;
  displayedColumns: string[] = ['id', 'name', 'types', 'hp', 'sta', 'spd', 'atk', 'def', 'spatk', 'spdef', 'total'];

  // types$: Observable<Array<Type>>;
  // weaknesses$: Observable<Map<string, Weakness>>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: ActivatedRoute,
              private typeService: TypeService,
              private weaknessService: WeaknessService,
              private temtemService: TemtemService) { }

  ngOnInit(): void {
    this.subscriptions = combineLatest([
      this.typeService.getTypes(),
      this.weaknessService.getWeaknesses(),
      this.route.params
    ]).subscribe(([types, weaknesses, params]: [Array<Type>, Map<string, Weakness>, Params]) => {
      this.resetTypes();
      this.type = params.typeCode;
      this.setupTypes(types, weaknesses, params.typeCode);
      console.log(this.weakTypes);
    });
    this.route.params.subscribe((params: Params) => {
      this.temtems$ = this.temtemService.getTemtems(params.typeCode);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setupTypes(types: Array<Type>, weaknesses: Map<string, Weakness>, currentType: string): void {
    Object.keys(weaknesses).map( key => {
      this.setupType(currentType, key, weaknesses[key], types);
    });
  }

  private setupType(routeType: string, weaknessType: string, weakness: Weakness, types: Array<Type>): void {
    // The Type of the page is the same as the type checked in the setupTypes loop currently (Effective/Ineffective)
    if (routeType === weaknessType) {
      this.addCurrentTypeWeakness(TypeEnum.CRYSTAL, weakness.Crystal, types);
      this.addCurrentTypeWeakness(TypeEnum.DIGITAL, weakness.Digital, types);
      this.addCurrentTypeWeakness(TypeEnum.EARTH, weakness.Earth, types);
      this.addCurrentTypeWeakness(TypeEnum.ELECTRIC, weakness.Electric, types);
      this.addCurrentTypeWeakness(TypeEnum.FIRE, weakness.Fire, types);
      this.addCurrentTypeWeakness(TypeEnum.MELEE, weakness.Melee, types);
      this.addCurrentTypeWeakness(TypeEnum.MENTAL, weakness.Mental, types);
      this.addCurrentTypeWeakness(TypeEnum.NATURE, weakness.Nature, types);
      this.addCurrentTypeWeakness(TypeEnum.NEUTRAL, weakness.Neutral, types);
      this.addCurrentTypeWeakness(TypeEnum.TOXIC, weakness.Toxic, types);
      this.addCurrentTypeWeakness(TypeEnum.WATER, weakness.Water, types);
      this.addCurrentTypeWeakness(TypeEnum.WIND, weakness.Wind, types); 
    } else { //Receiving end of damage
      switch (routeType) {
        case TypeEnum.CRYSTAL: {
            this.addReceivingWeakness(weaknessType, weakness.Crystal, types);
            break;
        }
        case TypeEnum.DIGITAL: {
          this.addReceivingWeakness(weaknessType, weakness.Digital, types);
          break;
        }
        case TypeEnum.EARTH: {
          this.addReceivingWeakness(weaknessType, weakness.Earth, types);
          break;
        }
        case TypeEnum.ELECTRIC: {
          this.addReceivingWeakness(weaknessType, weakness.Electric, types);
          break;
        }
        case TypeEnum.FIRE: {
          this.addReceivingWeakness(weaknessType, weakness.Fire, types);
          break;
        }
        case TypeEnum.MELEE: {
          this.addReceivingWeakness(weaknessType, weakness.Melee, types);
          break;
        }
        case TypeEnum.MENTAL: {
          this.addReceivingWeakness(weaknessType, weakness.Mental, types);
          break;
        }
        case TypeEnum.NATURE: {
          this.addReceivingWeakness(weaknessType, weakness.Nature, types);
          break;
        }
        case TypeEnum.NEUTRAL: {
          this.addReceivingWeakness(weaknessType, weakness.Neutral, types);
          break;
        }
        case TypeEnum.TOXIC: {
          this.addReceivingWeakness(weaknessType, weakness.Toxic, types);
          break;
        }
        case TypeEnum.WATER: {
          this.addReceivingWeakness(weaknessType, weakness.Water, types);
          break;
        }
        case TypeEnum.WIND: {
          this.addReceivingWeakness(weaknessType, weakness.Wind, types);
          break;
        }
        default: {
           // statements;
           break;
        }
     }
    }
  }

  private addCurrentTypeWeakness(weaknessType: string, weaknessMultiplier: number, types: Array<Type>): void {
      if (weaknessMultiplier > 1) {
        this.effectiveTypes.push(new Type(weaknessType, this.findIcon(weaknessType, types)));
      } else if (weaknessMultiplier < 1){
        this.ineffectiveTypes.push(new Type(weaknessType, this.findIcon(weaknessType, types)));
      }
  }

  private addReceivingWeakness(weaknessType: string, weaknessMultiplier: number, types: Array<Type>): void {
    if (weaknessMultiplier > 1) {
      this.weakTypes.push(new Type(weaknessType, this.findIcon(weaknessType, types)));
    } else if (weaknessMultiplier < 1){
      this.resistantTypes.push(new Type(weaknessType, this.findIcon(weaknessType, types)));
    }
  }

  private findIcon(weaknessType: string, types: Array<Type>): string {
    let iconValue: string;
    types.forEach(type => {
      if (type.name === weaknessType){
        iconValue = type.icon;
      }
    });
    return iconValue;
  }

  private resetTypes(): void {
    this.effectiveTypes = new Array<Type>();
    this.ineffectiveTypes = new Array<Type>();
    this.resistantTypes = new Array<Type>();
    this.weakTypes = new Array<Type>();
  }
}
