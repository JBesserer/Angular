import { Effect, ofType, Actions} from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    GetWeaknessesSuccess,
    EWeaknessActions,
    GetWeaknesses
} from '../actions/weakness.actions';
import { WeaknessService } from '../../sidenav/services/weakness.service';
import { Weakness } from '../../models/weakness.model';
import { Injectable } from '@angular/core';

@Injectable()
export class WeaknessEffects {
    @Effect()
    getWeaknesses$ = this.actions$.pipe(
        ofType<GetWeaknesses>(EWeaknessActions.GET_WEAKNESSES),
        switchMap(() => {
            return this.weaknessService.getWeaknesses();
        }),
        switchMap((weaknesses: Map<string, Weakness>) => of(new GetWeaknessesSuccess(weaknesses)))
    );

    constructor(
        private weaknessService: WeaknessService,
        private actions$: Actions
    ) {}
}
