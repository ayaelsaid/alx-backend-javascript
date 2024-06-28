import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const Constructor = this.constructor;
    const newCar = new Constructor(this._brand, this._motor, this._color, this._range);
    return new Car(this._brand, this._motor, this._color); // Always return a Car instance
  }
}

export default EVCar;
