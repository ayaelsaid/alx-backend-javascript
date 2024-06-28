import Car from './Car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this.brand, this.motor, this.color);
  }
}
