export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 'Students should be a list';
  }
  const idArray = students.map((item) => item.id); // Extracts 'id' values into an array
  const sumOfId = idArray.reduce((acc, id) => acc + id, 0); // Sums up 'id' values

  return sumOfId;
}
