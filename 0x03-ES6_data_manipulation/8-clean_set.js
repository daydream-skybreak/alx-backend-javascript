const cleanSet = (set, start) => {
  const str = [];
  if (start === '' || typeof start !== 'string') return '';

  set.forEach((i) => {
    if (typeof s === 'string' && i.startsWith(start)) str.push(i.slice(start.length));
  });

  return str.join('-');
};
export default cleanSet;
