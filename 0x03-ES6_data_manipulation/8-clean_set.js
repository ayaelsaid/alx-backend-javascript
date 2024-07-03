export default function cleanSet(set, startString) {
    if (!set || typeof set !== 'object' || !Symbol.iterator in Object(set)) {
        return ''; // Return empty string if set is not iterable
    }

    if (typeof startString !== 'string' || startString.length === 0) {
        return ''; // Return empty string if startString is not a non-empty string
    }

    let strings = Array.from(set).filter(item => typeof item === 'string' && item.startsWith(startString));

    strings = strings.map(item => item.slice(startString.length));

    return strings.join('-');
}
