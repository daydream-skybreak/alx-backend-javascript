const getStudentIdsSum = (arr) => arr.reduce((acc, val) => acc + val.id, 0);

export default getStudentIdsSum;
