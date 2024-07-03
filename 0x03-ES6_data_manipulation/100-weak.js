export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  // Retrieve the current call count for the endpoint from weakMap
  let callCount;
 if (!weakMap.has(endpoint)) {
   weakMap.set(endpoint, 0)
 }
 callCount = weakMap.get(endpoint) + 1;
  if (callCount >= 5) {
    throw new Error('Endpoint load is high.');
  }

  weakMap.set(endpoint, callCount);
  // Throw an error if the call count exceeds the limit
  // Return the updated call count
  return callCount;
}
