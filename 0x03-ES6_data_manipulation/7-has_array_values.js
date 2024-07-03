export default function hasValuesFromArray(set, array) {
  // Iterate over each element in the array
  for (const item of array) {
    // Check if the item exists in the set
    if (!set.has(item)) {
      return false;
    }
  }
  // If all elements are found in the set, return true
  return true;
}
