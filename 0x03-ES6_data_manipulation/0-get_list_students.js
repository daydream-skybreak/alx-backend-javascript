const returnObject = (i, nme, loctn) => ({
  id: i,
  name: nme,
  location: loctn,
});

export default function getListStudents() {
  return [returnObject(1, 'Guillaume', 'San Francisco'),
    returnObject(2, 'James', 'Columbia'),
    returnObject(5, 'Serena', 'San Francisco')];
}
