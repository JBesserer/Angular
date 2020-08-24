import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IWeaknessState } from '../states/weakness.state';

const selectWeaknesses = (state: IAppState) => state.weaknessesState;

export const selectWeaknessList = createSelector(
    selectWeaknesses,
    (state: IWeaknessState) => state?.weaknesses
);
