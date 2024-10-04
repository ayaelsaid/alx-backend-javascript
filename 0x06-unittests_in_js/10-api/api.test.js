const request = require('supertest');
const assert = require('assert');
const app = require('./api'); // Adjust the path if necessary

describe('API Endpoints', () => {
    describe('GET /', () => {
        it('should return the welcome message', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Content-Type', /text/)
                .expect('Welcome to the payment system', done);
        });
    });

    describe('GET /cart/:id', () => {
        it('should return payment methods for a valid cart ID', (done) => {
            request(app)
                .get('/cart/123')
                .expect(200)
                .expect('Payment methods for cart 123', done);
        });

        it('404 for invalid cart ID', (done) => {
            request(app)
                .get('/cart/abc') // Invalid ID
                .expect(404, done);
        });
    });

    describe('GET /available_payments', () => {
        it('available payment methods', (done) => {
            request(app)
                .get('/available_payments')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false,
                    },
                }, done);
        });
    });

    describe('POST /login', () => {
        it(' welcome message with username', (done) => {
            request(app)
                .post('/login')
                .send({ userName: 'Alice' })
                .expect(200)
                .expect('Welcome: Alice', done);
        });

        it('check if username is not provided', (done) => {
            request(app)
                .post('/login')
                .send({})
                .expect(400, done);
        });
    });
});
