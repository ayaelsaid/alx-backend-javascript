export default function createInt8TypedArray(length, position, value) {
  // Initialize an Int8Array with the specified length
  const int8Array = new ArrayBuffer(length);

  // Check if the position is outside the range of the array
  if (position >= length || position < 0) {
    return 'Position outside range';
  }

  const dataView = new DataView(int8Array);
  dataView.setInt8(position, value);

  return dataView;
}
