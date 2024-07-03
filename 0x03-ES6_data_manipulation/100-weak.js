export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  // Retrieve the current call count for the endpoint from weakMap
  let callCount = weakMap.get(endpoint) || 0;

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  callCount = weakMap.get(endpoint) + 1;
  if (callCount >= 5) {
    throw new Error('Endpoint load is high.');
  }

  weakMap.set(endpoint, callCount);
  return callCount;
}
