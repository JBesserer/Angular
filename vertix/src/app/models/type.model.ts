export class Type {
    name: string;
    specificCode: string;

    constructor(name: string, specificCode: string) {
      this.name = name;
      this.specificCode = specificCode;
    }

    getName(): string {
        return this.name;
    }

    getSpecificCode(): string {
        return this.specificCode;
    }
  }
