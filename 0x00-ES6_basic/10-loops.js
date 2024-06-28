export default function appendToEachArrayValue(array, appendString) {
  for (const value in array) {
    const newArray.push(appendString + value);
  }

  return newArray;
}
