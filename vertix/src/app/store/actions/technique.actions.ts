import { Action } from '@ngrx/store';

import { Technique } from '../../models/technique.model';

export enum ETechniqueActions {
    GET_TECHNIQUES = '[Temtem] Get Techniques',
    GET_TECHNIQUES_SUCCESS = '[Temtem] Get Techniques Success'
}

export class GetTechniques implements Action {
    public readonly type = ETechniqueActions.GET_TECHNIQUES;
}

export class GetTechniquesSuccess implements Action {
    public readonly type = ETechniqueActions.GET_TECHNIQUES_SUCCESS;
    constructor(public payload: Array<Technique>) {}
}

export type TechniqueActions = GetTechniques | GetTechniquesSuccess;