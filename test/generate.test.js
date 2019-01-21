const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('GET /generate endpoint', () => {
  it('should generate an array of 5', () => {
    return request(app)
      .get('/generate')
      .query({n:5})
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf.at.least(1);
        // expect(res.body).to.eql([1,2,3,4,5]); // will fail
        expect(res.body).to.include(5);   
        expect(res.body).to.include.members([1,2,3,4,5]);
      });
  })
});