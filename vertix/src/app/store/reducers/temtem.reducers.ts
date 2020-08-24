import { ETemtemActions, TemtemActions } from '../actions/temtem.actions';
import { ITemtemState, initialTemtemState } from '../states/temtem.state';

export const temtemReducers = (
    state = initialTemtemState,
    action: TemtemActions
): ITemtemState => {
    switch (action.type) {
        case ETemtemActions.GET_TEMTEMS_SUCCESS: {
            return {
                ...state,
                temtems: action.payload
            };
        }

        default:
            return state;
    }
};
