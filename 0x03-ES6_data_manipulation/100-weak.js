export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  // Retrieve the current call count for the endpoint from weakMap
  let callCount = weakMap.get(endpoint) || 0;

  // Increment the call count
  callCount++;

  // Throw an error if the call count exceeds the limit
  if (callCount >= 5) {
    throw new Error('Endpoint load is high.');
  }

  // Update the call count in weakMap
  weakMap.set(endpoint, callCount);

  // Return the updated call count
  return callCount;
}
