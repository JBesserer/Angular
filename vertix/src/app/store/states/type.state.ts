import { Type } from '../../models/type.model';

export interface ITypeState {
    types: Array<Type>;
}

export const initialTypeState: ITypeState = {
    types: null
};