const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {

    it('should return a resolved promise with data when success is true', async () => {
        const response = await getPaymentTokenFromAPI(true);
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
    });

});
