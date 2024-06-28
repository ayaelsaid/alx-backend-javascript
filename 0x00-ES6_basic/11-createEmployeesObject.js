export default function createEmployeesObject(departmentName, employees) {
  const obj = {
    [departmentName]: [...employees]  // Using spread syntax to create a new array
  };
  return obj;
}
