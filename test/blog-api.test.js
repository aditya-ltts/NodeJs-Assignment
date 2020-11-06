// NOTE: To perform the testing the test cases will get connected to the Database, 
// so will need to create the data before performing the test and change in the :blogId accordingly.

// test suite
const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const request = require('supertest'); // an alternative for chai-http
const app = require('../app');

// setup chai-http plugin
chai.use(chaiHttp);

describe('POST /blogs', function () {
    it('should return status 200 for POST Request', async () => {
        let res = await chai
            .request(app)
            .post('/api/blogs')
            .send({ name: "Charlie", headline: "this is headline", body: "the body of the blog post" })
        expect(res.status).to.equal(200);
    });
});

describe('GET /blogs', function () {
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/api/blogs')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should return json data', async () => {
        let res = await chai
            .request(app)
            .get('/api/blogs');
        expect(res.body).to.be.an('array');
    });
});

describe('GET /blogs by id', function () {
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/api/blogs/3')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('PUT /blogs/:id', function () {
    it('should return status 200 for PUT Request', function (done) {
        request(app)
            .put('/api/blogs/2')
            .set('Accept', 'application/json')
            .send({ name: "Charlie", headline: "this is headline", body: "the body of the blog post" })
            .expect(200, done);
    });
});

describe('DELETE /blogs/:id', function () {
    it('should return 200 json data', (done) => {
        chai.request(app)
            .delete('/api/blogs/6')
            .end((err, result) => {
                expect(result.status).to.equal(200);
                console.log("Deleted Particlar blog using /GET/blogs/:blogId ::::", result.body)
                done()
            });
    });
});