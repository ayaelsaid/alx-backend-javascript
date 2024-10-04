const request = require('supertest');
const assert = require('assert');
const app = require('./api');

describe('Index Page', () => {
    it('checking status code', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 200);
                done();
            });
    });

    it('checking message', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'Welcome to the payment system');
                done();
            });
    });

    it('check the correct content length', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.headers['content-length'], '29');
                done();
            });
    });

    it('check if routes correctly', (done) => {
        request(app)
            .get('/non-existent')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 404);
                done();
            });
    });
});

// New test suite for cart page
describe('Cart Page', () => {
    it('check numeric ID', (done) => {
        request(app)
            .get('/cart/376')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 200);
                assert.strictEqual(res.text, 'Payment methods for cart 376');
                done();
            });
    });

    it('checking for non-numeric ID', (done) => {
        request(app)
            .get('/cart/abc')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 404);
                done();
            });
    });

    it('checjing if ID missing', (done) => {
        request(app)
            .get('/cart/')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 404);
                done();
            });
    });
});
