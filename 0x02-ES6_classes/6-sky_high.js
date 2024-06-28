import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Initialize sqft using the parent class constructor
    this._floors = floors;
  }

  get sqft() {
    return this._sqft; // Inherited from Building
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newSqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
