const request = require('supertest');
const assert = require('assert');
const app = require('./api');

describe('Index Page', () => {
    it('check status code', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 200);
                done();
            });
    });

    it('check message', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'Welcome to the payment system');
                done();
            });
    });
  
    it('check routes', (done) => {
        request(app)
            .get('/non-existent')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 404);
                done();
            });
    });
});
