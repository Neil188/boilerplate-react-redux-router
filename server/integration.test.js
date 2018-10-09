const request = require('supertest');
const app = require('./app');

test('should pass integration tests', done => {
    request(app)
        .get('/')
        .expect('Content-Type', 'text/html; charset=UTF-8')
        .expect(200)
        .end((err) => {
            if (err) throw done(err);
            done();
        })
});
