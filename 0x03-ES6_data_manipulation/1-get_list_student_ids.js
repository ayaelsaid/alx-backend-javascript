export default function getListStudentIds(array) {
    if (!Array.isArray(array)) {
        return []; // Return an empty array if array is not valid
    }

    let id = array.map(item => {
        if (item.hasOwnProperty('id')) {
            return item.id;
        }
    }) // Filter out any null values (optional)

    return id;
}
