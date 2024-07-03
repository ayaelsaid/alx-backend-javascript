export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return 'Students should be a list'; // Return a message indicating students should be an array
  }
  if (typeof (city) !== 'string') {
    return 'City must be a string';
  }
  const specificCity = students.filter((student) => student.location === city);
  return specificCity;
}
