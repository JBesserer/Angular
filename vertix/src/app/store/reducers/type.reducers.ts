import * as typeActions from '../actions/type.actions';
import { ITypeState, initialTypeState } from '../states/type.state';

export const typeReducers = (
    state = initialTypeState,
    action: typeActions.TypeActions
): ITypeState => {
    switch (action.type) {
        case typeActions.ETypeActions.GET_TYPES_SUCCESS: {
            return {
                ...state,
                types: action.payload
            };
        }

        default:
            return state;
    }
};