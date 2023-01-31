const hasValuesFromArray = (set, arr) => {
  const unique = [...new Set(arr)];
  for (const i of unique) {
    if (!set.has(i)) return false;
  }
  return true;
};

export default hasValuesFromArray;
