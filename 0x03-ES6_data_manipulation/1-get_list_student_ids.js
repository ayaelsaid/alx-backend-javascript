export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return []; // Return an empty array if array is not valid
  }

  const id = array.map((item) => {
    if (item.hasOwnProperty('id')) {
      return item.id;
    } else {
            return undefined; // Return undefined or another default value as needed
        }
  });

  return id;
}
