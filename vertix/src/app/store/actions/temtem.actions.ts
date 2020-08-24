import { Action } from '@ngrx/store';

import { Temtem } from '../../models/temtem.model';

export enum ETemtemActions {
    GET_TEMTEMS = '[Temtem] Get Temtems',
    GET_TEMTEMS_SUCCESS = '[Temtem] Get Temtems Success'
}

export class GetTemtems implements Action {
    public readonly type = ETemtemActions.GET_TEMTEMS;
}

export class GetTemtemsSuccess implements Action {
    public readonly type = ETemtemActions.GET_TEMTEMS_SUCCESS;
    constructor(public payload: Array<Temtem>) {}
}

export type TemtemActions = GetTemtems | GetTemtemsSuccess;