export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  }
  const callCount = weakMap.get(endpoint);
  weakMap.set(endpoint, callCount + 1);

  if (callCount >= 4) {
    throw new Error('Endpoint load is high.');
  }

  return callCount;
}
