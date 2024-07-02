export default function cleanSet(set, startString) {
    if (typeof startString !== 'string' || startString.length === 0) {
        return '';
    }

    let array = Array.from(set).filter(item => item.startsWith(startString));

    array = array.map(item => item.slice(startString.length));

    return array.join('-');
}
