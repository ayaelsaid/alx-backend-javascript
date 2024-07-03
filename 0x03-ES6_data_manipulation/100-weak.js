export const weakMap = new WeakMap();

// Function to query API
export default function queryAPI(endpoint) {
  let callCount = weakMap.get(endpoint) || 0;

  callCount++;

  if (callCount >= 5) {
      throw new Error('Endpoint load is high.');
   }

  weakMap.set(endpoint, callCount);

   return callCount;
}
