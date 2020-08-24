import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { ITechniqueState } from '../states/technique.state';

const selectTechniques = (state: IAppState) => state.techniqueState;

export const selectTechniqueList = createSelector(
    selectTechniques,
    (state: ITechniqueState) => state.techniques
  );

export const selectTechniqueListForType = createSelector(
    selectTechniques,
  (state: ITechniqueState, props) => state.techniques?.filter(temtem => temtem.type === props.type)
);
