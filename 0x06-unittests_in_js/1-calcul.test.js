const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => { // Added quotes for the description
    it('should return the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
it('should return result of sub ', () => {

        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
        });
it('should return the result of the divided', () => {

        assert.strictEqual(calculateNumber('DIVIDE', 6.2, 3.7), 2);
        });
it('should return to an error', () => {

assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });
it('should return "Error" for an unknown operation type', () => {
        assert.strictEqual(calculateNumber('UNKNOWN', 1.4, 4.5), 'Error');
    });

});
