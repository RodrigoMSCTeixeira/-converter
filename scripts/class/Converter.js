export default class Converter {
  unitBeforeConvert;
  number;
  unitAfterConvert;

  constructor(unitBeforeConvert, number, unitAfterConvert) {
    this.unitBeforeConvert = unitBeforeConvert;
    this.number = number;
    this.unitAfterConvert = unitAfterConvert;
  }

  get convert() {
    return this.calc();
  }

  calc() {
    let calc = 0;
    const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
    const x = units.indexOf(this.unitBeforeConvert);
    const y = units.indexOf(this.unitAfterConvert);

    calc =
      x > y
        ? this.number / Math.pow(10, x - y)
        : this.number * Math.pow(10, y - x);

    return calc;
  }
}
