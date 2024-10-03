const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return result of subtraction', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('should return the result of the division', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 6.2, 3.7), 2);
    });

    it('should return an error for division by zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });

    it('should return "Error" for an unknown operation type', () => {
        assert.strictEqual(calculateNumber('UNKNOWN', 1.4, 4.5), 'Error');
    });
});
