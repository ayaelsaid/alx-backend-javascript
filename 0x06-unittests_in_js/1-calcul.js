function calculateNumber(type, a, b) {
    let roundedA = Math.round(a);
    let roundedB = Math.round(b);

    switch (type) {
        case 'SUM':
            return roundedA + roundedB;

        case 'SUBTRACT':
            return roundedA - roundedB;

        case 'DIVIDE':
            if (roundedB === 0) {
                return "Error";
            }
            return roundedA / roundedB;

        default:
            return 'Error';
    }
}

module.exports = calculateNumber;
