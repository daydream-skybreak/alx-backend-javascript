const getStudentsByLocation = (students, loc) => students.filter((x) => x.location === loc);

export default getStudentsByLocation;
