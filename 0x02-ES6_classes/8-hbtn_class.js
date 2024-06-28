export default class HolbertonClass {
  constructor(size, location) {
    this.size = size; // Use the setter to assign size
    this.location = location; // Use the setter to assign location
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') {
      throw new Error('Size must be a number');
    }
    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new Error('Location must be a string');
    }
    this._location = newLocation;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
