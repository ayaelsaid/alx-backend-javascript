const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./main');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert.strictEqual(spy.calledOnce, true);
        assert.strictEqual(spy.calledWith('SUM', 100, 20), true);
        spy.restore();
    });
});
