import { Type } from './type.model';
import { Category } from './category.model';
import { Synergy } from './synergy.model';

export class Technique {
    id: string;
    name: string;
    type: Type;
    synergy: Synergy;
    category: Category;
    damage: number;
    stamina: number;
    hold: number;
    priority: number;

    constructor(id: string,
                name: string,
                type: Type,
                synergy: Synergy,
                category: Category,
                damage: number,
                stamina: number,
                hold: number,
                priority: number) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.synergy = synergy;
      this.category = category;
      this.damage = damage;
      this.stamina = stamina;
      this.hold = hold;
      this.priority = priority;
    }

    getId(): string {
      return this.id;
    }

    getName(): string {
        return this.name;
    }

    getType(): Type {
        return this.type;
    }

    getSynergy(): Synergy {
        return this.synergy;
    }

    getCategory(): Category {
        return this.category;
    }

    getDamage(): number {
        return this.damage;
    }

    getStamina(): number {
        return this.stamina;
    }

    getHold(): number {
        return this.hold;
    }

    getPriority(): number {
        return this.priority;
    }
}