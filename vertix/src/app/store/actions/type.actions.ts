import { Action } from '@ngrx/store';
import { Type } from '../../models/type.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ETypeActions {
    GET_TYPES = '[Type] Get Types',
    GET_TYPES_SUCCESS = '[Type] Get Types Success'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class GetTypes implements Action {
    readonly type = ETypeActions.GET_TYPES;
}

export class GetTypesSuccess implements Action {
    readonly type = ETypeActions.GET_TYPES_SUCCESS;

    constructor(public payload: Array<Type>) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TypeActions
                        = GetTypes
                        | GetTypesSuccess;


