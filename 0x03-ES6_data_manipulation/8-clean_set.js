const cleanSet = (set, start) => {
  const str = [];
  const lasti = start.length - 1;
  if (start === '') str.push('');
  else {
    for (const i of set) {
      if (i.startsWith(start)) str.push(i.slice(lasti + 1));
    }
  }
  return [...new Set(str)].join('-');
};
export default cleanSet;
