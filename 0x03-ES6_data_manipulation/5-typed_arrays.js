export default function createInt8TypedArray(length, position, value) {
  // Initialize an Int8Array with the specified length
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  // Check if the position is outside the range of the array
  if (position > int8Array.length || position < 0) {
    return 'Position outside range';
  }
  int8Array[position] = value;
return new DataView(buffer);
}
