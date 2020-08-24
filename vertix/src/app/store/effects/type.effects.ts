import { Effect, ofType, Actions} from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    GetTypesSuccess,
    ETypeActions,
    GetTypes
} from '../actions/type.actions';
import { TypeService } from '../../sidenav/services/type.service';
import { Type } from '../../models/type.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TypeEffects {
    @Effect()
    getTypes$ = this.actions$.pipe(
        ofType<GetTypes>(ETypeActions.GET_TYPES),
        switchMap(() => {
            return this.typeService.getTypes();
        }),
        switchMap((types: Array<Type>) => of(new GetTypesSuccess(types)))
    );

    constructor(
        private typeService: TypeService,
        private actions$: Actions
    ) {}
}
