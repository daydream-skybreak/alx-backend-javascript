const cleanSet = (set, start) => {
  const str = [];
  const lasti = start.length - 1;
  if (start === '' || typeof start !== 'string') return '';

  set.forEach((i) => {
    if (i.startsWith(start)) str.push(i.slice(lasti + 1));
  });

  return [...new Set(str)].join('-');
};
export default cleanSet;
