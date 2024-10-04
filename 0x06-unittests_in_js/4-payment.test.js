const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
        sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call Utils.calculateNumber correctly', () => {
        sendPaymentRequestToApi(100, 20);
        assert.strictEqual(Utils.calculateNumber.calledOnce, true);
        assert.strictEqual(Utils.calculateNumber.calledWith('SUM', 100, 20), true);
    });

    it('should log the message', () => {
        sendPaymentRequestToApi(100, 20);
        assert.strictEqual(consoleLogSpy.calledOnce, true);
        assert.strictEqual(consoleLogSpy.calledWith('The total is: 10'), true);
    });
});
