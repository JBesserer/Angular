import { Effect, ofType, Actions} from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    GetTemtemsSuccess,
    ETemtemActions,
    GetTemtems
} from '../actions/temtem.actions';
import { TemtemService } from '../../sidenav/services/temtem.service';
import { Temtem } from '../../models/temtem.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TemtemEffects {
    @Effect()
    getTemtems$ = this.actions$.pipe(
        ofType<GetTemtems>(ETemtemActions.GET_TEMTEMS),
        switchMap(() => {
            return this.temtemService.getTemtems();
        }),
        switchMap((temtems: Array<Temtem>) => of(new GetTemtemsSuccess(temtems)))
    );

    constructor(
        private temtemService: TemtemService,
        private actions$: Actions
    ) {}
}
