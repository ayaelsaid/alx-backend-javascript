class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;

    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class');
    }

    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}

set sqft(newSqft) {
  if (typeof newSqft !== 'number') {
      throw new Error('sqft must be a number');
    }
      this._sqft = newSqft;
}

export default Building;
