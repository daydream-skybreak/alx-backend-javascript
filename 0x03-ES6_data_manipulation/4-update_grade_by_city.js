const updateStudentGradeByCity = (arr, city, grade) => {
  const newStudents = arr.filter((x) => x.location === city);
  return newStudents.map((stud) => {
    const newGrade = grade.filter((x) => x.studentId === stud.id);
    if (newGrade.length > 0) {
      return {
        ...stud,
        grade: newGrade[0].grade,
      };
    }
    return {
      ...stud,
      grade: 'N/A',
    };
  });
};

export default updateStudentGradeByCity;
