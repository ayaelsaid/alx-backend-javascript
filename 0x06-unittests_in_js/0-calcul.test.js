const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers for (1, 3)', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return the sum of rounded numbers for (1, 3.7)', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return the sum of rounded numbers for (1.2, 3.7)', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return the sum of rounded numbers for (1.5, 3.7)', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it('should return the sum of rounded numbers for (1.5, 3.7)', () => {
        assert.strictEqual(calculateNumber(-1.2, -3.2), -4);
    });
    it('should return the sum of rounded numbers for (1.5, 3.7)', () => {
        assert.strictEqual(calculateNumber(-1.6, -2.7), -4);
    });
});
