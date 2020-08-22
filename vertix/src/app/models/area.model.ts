export class Area {
    id: string;
    name: string;
    specificCode: string;

    constructor(id: string, name: string, specificCode: string) {
      this.id = id;
      this.name = name;
      this.specificCode = specificCode;
    }

    getId(): string {
      return this.id;
  }

    getName(): string {
        return this.name;
    }

    getSpecificCode(): string {
        return this.specificCode;
    }
}