import { Effect, ofType, Actions} from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    GetTechniquesSuccess,
    ETechniqueActions,
    GetTechniques
} from '../actions/technique.actions';
import { TechniqueService } from '../../sidenav/services/technique.service';
import { Technique } from '../../models/technique.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TechniqueEffects {
    @Effect()
    getTechniques$ = this.actions$.pipe(
        ofType<GetTechniques>(ETechniqueActions.GET_TECHNIQUES),
        switchMap(() => {
            return this.techniqueService.getTechniques();
        }),
        switchMap((techniques: Array<Technique>) => of(new GetTechniquesSuccess(techniques)))
    );

    constructor(
        private techniqueService: TechniqueService,
        private actions$: Actions
    ) {}
}
