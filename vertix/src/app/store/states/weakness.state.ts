import { Weakness } from '../../models/weakness.model';

export interface IWeaknessState {
    weaknesses: Map<string, Weakness>;
}

export const initialWeaknessState: IWeaknessState = {
    weaknesses: null
};