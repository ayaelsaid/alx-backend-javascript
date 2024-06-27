export default function divideFunction(numerator, denominator) {
    if (denominator !== 0) {
        let result = numerator / denominator;
        return result;
    } else {
        throw new Error('Cannot divide by 0');
    }
}
