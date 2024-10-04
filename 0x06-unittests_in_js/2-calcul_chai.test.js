const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return result of subtraction', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return the result of the division', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return an error for division by zero', () => {
        expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });

    it('should return "Error" for an unknown operation type', () => {
        expect(calculateNumber('UNKNOWN', 1.4, 4.5)).to.equal('Error');
    });
});
