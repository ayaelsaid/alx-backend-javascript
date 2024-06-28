import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      throw new Error('floors must be a number');
    }
    this._floors = floors;
    super(sqft);
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    return this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
