const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });
  

    it('should call Utils.calculateNumber correctly', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(120);
        sendPaymentRequestToApi(100, 20);
        assert.strictEqual(stub.calledOnce, true);
        assert.strictEqual(stub.calledWith('SUM', 100, 20), true);
        assert.strictEqual(consoleLogSpy.calledOnce, true);
        assert.strictEqual(consoleLogSpy.calledWith('The total is: 120'), true);
    });


    it('should log the message', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(20);
        sendPaymentRequestToApi(10, 10);
        assert.strictEqual(stub.calledOnce, true);
        assert.strictEqual(stub.calledWith('SUM', 10, 10), true);
        assert.strictEqual(consoleLogSpy.calledOnce, true);
        assert.strictEqual(consoleLogSpy.calledWith('The total is: 20'), true);
    });

    });
});
