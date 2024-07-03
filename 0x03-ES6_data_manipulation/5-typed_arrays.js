export default function createInt8TypedArray(length, position, value) {
  // Initialize an ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  // Check if the position is outside the range of the array
  if (position >= int8Array.length || position < 0) {
    throw new Error('Position outside range');
  }

  // Create a DataView of the buffer
  const dataView = new DataView(buffer);

  // Set the value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}
