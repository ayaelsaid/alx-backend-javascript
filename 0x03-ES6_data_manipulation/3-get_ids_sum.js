export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 'Students should be a list';
  }
  let idArray = students.map(item => item.id); // Extracts 'id' values into an array
  let sumOfId = idArray.reduce((acc, id) => acc + id, 0); // Sums up 'id' values

  return sumOfId;
}
