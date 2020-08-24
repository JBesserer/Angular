import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { ITypeState } from '../states/type.state';

const selectTypes = (state: IAppState) => state.typesState;

export const selectTypesList = createSelector(
    selectTypes,
    (state: ITypeState) => state?.types
);
