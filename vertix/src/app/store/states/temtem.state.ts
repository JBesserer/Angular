import { Temtem } from '../../models/temtem.model';

export interface ITemtemState {
    temtems: Array<Temtem>;
}

export const initialTemtemState: ITemtemState = {
    temtems: null
};