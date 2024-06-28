export default function createReportObject(employeesList) {
  const all =  {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return all;
}
