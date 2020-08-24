import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../states/app.state';
import { temtemReducers } from './temtem.reducers';
import { typeReducers } from './type.reducers';
import { weaknessReducers } from './weakness.reducers';
import { techniqueReducers } from './technique.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    temtemsState: temtemReducers,
    typesState: typeReducers,
    weaknessesState: weaknessReducers,
    techniqueState: techniqueReducers
};