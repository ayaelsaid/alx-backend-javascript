function calculateNumber(a, b) {
    const rA = Math.round(a);
    const rB =  Math.round(b);
    const sum = rA + rB;
    return sum;
}

module.exports = calculateNumber;
