import { Type } from './type.model';

export class Synergy {
    type: Type;
    description: string;

    constructor(type: Type, description: string) {
      this.type = type;
      this.description = description;
    }

    getType(): Type {
      return this.type;
    }

    getDescription(): string {
        return this.description;
    }
}