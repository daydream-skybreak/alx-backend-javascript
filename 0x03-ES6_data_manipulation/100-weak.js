export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const epd = weakMap.get(endpoint);
    if (epd >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (epd + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
