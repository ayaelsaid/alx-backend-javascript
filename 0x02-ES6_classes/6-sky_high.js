import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Initialize sqft using the parent class constructor
    this._floors = floors;
  }

  get sqft() {
    return this._sqft; // Inherited from Building
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
