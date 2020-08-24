import { Technique } from '../../models/technique.model';

export interface ITechniqueState {
    techniques: Array<Technique>;
}

export const initialTechniqueState: ITechniqueState = {
    techniques: null
};