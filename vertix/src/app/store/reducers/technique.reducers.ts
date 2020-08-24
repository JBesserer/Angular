import * as actions from '../actions/technique.actions';
import { ITechniqueState, initialTechniqueState } from '../states/technique.state';

export const techniqueReducers = (
    state = initialTechniqueState,
    action: actions.TechniqueActions
): ITechniqueState => {
    switch (action.type) {
        case actions.ETechniqueActions.GET_TECHNIQUES_SUCCESS: {
            return {
                ...state,
                techniques: action.payload
            };
        }

        default:
            return state;
    }
};