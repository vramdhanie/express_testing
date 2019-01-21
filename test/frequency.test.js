const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('GET /frequency endpoint', () => {
  it('should return a correct word count', () => {
    const expected = {
      count: 2,
      average: 5,
      highest: 'a',
      'a': 6,
      'b': 4 
    };

    return request(app)
      .get('/frequency')
      .query({s: 'aaBBAAbbaa'})
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {   
        expect(res.body).to.include.all.keys('count', 'average', 'highest');
        expect(res.body).eql(expected);
      });
  })
});