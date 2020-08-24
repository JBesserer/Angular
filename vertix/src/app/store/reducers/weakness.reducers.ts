import * as actions from '../actions/weakness.actions';
import { IWeaknessState, initialWeaknessState } from '../states/weakness.state';

export const weaknessReducers = (
    state = initialWeaknessState,
    action: actions.WeaknessActions
): IWeaknessState => {
    switch (action.type) {
        case actions.EWeaknessActions.GET_WEAKNESSES_SUCCESS: {
            return {
                ...state,
                weaknesses: action.payload
            };
        }

        default:
            return state;
    }
};