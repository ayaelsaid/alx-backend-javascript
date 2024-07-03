export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const callCount = weakMap.get(endpoint);
    // Update the call count in the weakMap
    weakMap.set(endpoint, callCount + 1);

    // Throw an error if the call count exceeds the limit
    if (callCount >= 4) {
      throw new Error('Endpoint load is high.');
    }
  }

  return weakMap.get(endpoint);
}
