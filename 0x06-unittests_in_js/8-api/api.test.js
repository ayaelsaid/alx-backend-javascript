const request = require('supertest');
const assert = require('assert');
const app = require('./api');

describe('Index Page', () => {
    it('return the correct status code', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 200);
                done();
            });
    });

    it('return the correct message', (done) => {
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

    it('handle routes correctly', (done) => {
        request(app)
            .get('/non-existent')
            .end((err, res) => {
                assert.strictEqual(res.statusCode, 404);
                done();
            });
    });
});
