import { Type } from './type.model';

export class Temtem {
    id: string;
    name: string;
    types: Array<Type>;
    baseStats: Map<string, number>;

    constructor(id: string, name: string, types: Array<Type>, baseStats: Map<string, number>) {
      this.id = id;
      this.name = name;
      this.types = types;
      this.baseStats = baseStats;
    }

    getId(): string {
      return this.id;
    }

    getName(): string {
        return this.name;
    }

    getTypes(): Array<Type> {
        return this.types;
    }

    getBaseStats(): Map<string, number> {
        return this.baseStats;
    }
}