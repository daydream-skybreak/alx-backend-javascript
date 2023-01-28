export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(elem) {
      return Object.keys(elem).length;
    },

  };
  return report;
}
