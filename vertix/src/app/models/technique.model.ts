export class Technique {
    name: string;
    type: string;
    wikiUrl: string;
    synergy: string;
    damage: number;
    staminaCost: number;
    hold: number;
    priority: string;
    priorityIcon: string;
    targets: string;
    description: string;

    constructor(name: string, 
                type: string,
                wikiUrl: string,
                synergy: string,
                damage: number,
                staminaCost: number,
                hold: number,
                priority: string,
                priorityIcon: string,
                targets: string,
                description: string) {
        this.name = name;
        this.type = type;
        this.wikiUrl = wikiUrl;
        this.synergy = synergy;
        this.damage = damage;
        this.staminaCost = staminaCost;
        this.hold = hold;
        this.priority = priority;
        this.priorityIcon = priorityIcon;
        this.targets = targets;
        this.description = description;
    }
}