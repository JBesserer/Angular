import { Action } from '@ngrx/store';
import { Weakness } from '../../models/weakness.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum EWeaknessActions {
    GET_WEAKNESSES = '[Weakness] Get Weaknesses',
    GET_WEAKNESSES_SUCCESS = '[Weakness] Get Weaknesses Success'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class GetWeaknesses implements Action {
    readonly type = EWeaknessActions.GET_WEAKNESSES;
}

export class GetWeaknessesSuccess implements Action {
    readonly type = EWeaknessActions.GET_WEAKNESSES_SUCCESS;

    constructor(public payload: Map<string, Weakness>) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type WeaknessActions
                        = GetWeaknesses
                        | GetWeaknessesSuccess;


