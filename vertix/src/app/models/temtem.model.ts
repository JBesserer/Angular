import { Stats } from './stats.model';

export class Temtem {
    number: string;
    name: string;
    types: Array<string>;
    stats: Stats;

    constructor(number: string, name: string, types: Array<string>, stats: Stats) {
      this.number = number;
      this.name = name;
      this.types = types;
      this.stats = stats;
    }
}