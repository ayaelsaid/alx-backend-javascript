export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  // Retrieve the current call count for the endpoint from weakMap
<<<<<<< HEAD
  let callCount = weakMap.get(endpoint) || 0;

  // Increment the call count
  callCount += 1;

  // Throw an error if the call count exceeds the limit
=======
  let callCount;
 if (!weakMap.has(endpoint)) {
   weakMap.set(endpoint, 0)
 }
 callCount = weakMap.get(endpoint) + 1;
>>>>>>> 6ef0da7ae5cc9f1cf418034909ec367ec627c51f
  if (callCount >= 5) {
    throw new Error('Endpoint load is high.');
  }

  weakMap.set(endpoint, callCount);
  // Throw an error if the call count exceeds the limit
  // Return the updated call count
  return callCount;
}
