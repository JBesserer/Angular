import { Type } from './type.model';
import { Area } from './area.model';
import { Temtem } from './temtem.model';
import { Technique } from './technique.model';

export class TypeMetadata extends Type{
    description: string;
    effectiveTypes: Array<Type>;
    ineffectiveTypes: Array<Type>;
    resistantTypes: Array<Type>;
    weakTypes: Array<Type>;
    areas: Array<Area>;
    temtems: Array<Temtem>;
    techniques: Array<Technique>;
    
    constructor(id: string,
                name: string,
                description: string,
                effectiveTypes: Array<Type>,
                ineffectiveTypes: Array<Type>,
                resistantTypes: Array<Type>,
                weakTypes: Array<Type>,
                areas: Array<Area>,
                temtems: Array<Temtem>,
                techniques: Array<Technique>) {
      super(id, name);
      this.description = description;
      this.effectiveTypes = effectiveTypes;
      this.ineffectiveTypes = ineffectiveTypes;
      this.resistantTypes = resistantTypes;
      this.weakTypes = weakTypes;
      this.areas = areas;
      this.temtems = temtems;
      this.techniques = techniques;
    }

    getDescription(): string {
        return this.description;
    }

    getEffectiveTypes(): Array<Type> {
        return this.effectiveTypes;
    }

    getIneffectiveTypes(): Array<Type> {
        return this.ineffectiveTypes;
    }

    getResistantTypes(): Array<Type> {
        return this.ineffectiveTypes;
    }

    getWeakTypes(): Array<Type> {
        return this.weakTypes;
    }

    getAreas(): Array<Area> {
        return this.areas;
    }

    getTemtems(): Array<Temtem> {
        return this.temtems;
    }

    getTechniques(): Array<Technique> {
        return this.techniques;
    }
}