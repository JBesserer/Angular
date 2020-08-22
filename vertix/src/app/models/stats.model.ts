export class Stats {
    hp: number;
    sta: number;
    spd: number;
    atk: number;
    def: number;
    spatk: number;
    spdef: number;
    total: number;

    constructor(hp: number,
                sta: number,
                spd: number,
                atk: number,
                def: number,
                spatk: number,
                spdef: number,
                total: number) {
      this.hp = hp;
      this.sta = sta;
      this.spd = spd;
      this.atk = atk;
      this.def = def;
      this.spatk = spatk;
      this.spdef = spdef;
      this.total = total;
    }
}