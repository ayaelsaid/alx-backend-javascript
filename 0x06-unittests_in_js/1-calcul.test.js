const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => { // Added quotes for the description
    it('should return the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
        assert.strictEqual(calculateNumber('DIVIDE', 6.2, 3.7), 2);
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });
});
