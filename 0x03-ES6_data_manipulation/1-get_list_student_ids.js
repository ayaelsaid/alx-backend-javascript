export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return []; // Return an empty array if array is not valid
  }

  const id = array.map((item) => {
    if (Object.prototype.hasOwnProperty.call(item, 'id')) {
      return item.id;
    }
    return undefined; // Return undefined or another default value as needed
  });

  return id;
}
