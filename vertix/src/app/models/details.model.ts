import { Height } from './height.model';
import { Weight } from './weight.model';

export class Details {
    height: Height;
    weight: Weight;

    constructor(height: Height,
                weight: Weight) {
        this.height = height;
        this.weight = weight;
    }
}
