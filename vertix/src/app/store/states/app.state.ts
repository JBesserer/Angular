import { RouterReducerState } from '@ngrx/router-store';
import { ITemtemState, initialTemtemState } from './temtem.state';
import { ITypeState, initialTypeState } from './type.state';
import { IWeaknessState, initialWeaknessState } from './weakness.state';
import { ITechniqueState, initialTechniqueState } from './technique.state';

export interface IAppState {
    router?: RouterReducerState;
    temtemsState: ITemtemState;
    typesState: ITypeState;
    weaknessesState: IWeaknessState;
    techniqueState: ITechniqueState;
}

export const initialAppState: IAppState = {
    temtemsState: initialTemtemState,
    typesState: initialTypeState,
    weaknessesState: initialWeaknessState,
    techniqueState: initialTechniqueState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
