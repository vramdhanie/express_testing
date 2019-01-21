const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('Express App', () => {
    it('should get a message', () => { 
      return request(app) 
        .get('/')
        .expect(200, 'Hello Express!');
    });
});

describe('GET /sum', () => {
  it('8/4 should be 2', () => {
    return request(app)
      .get('/sum')
      .query({a: 8, b: 4})
      .expect(200, '8 divided by 4 is 2');
  });

  it('should return 400 if a is missing', () => {
    return request(app)
      .get('/sum')
      .query({b: 4})
      .expect(400, 'Value for a is needed');
  });

  it('should return 400 if b is missing', () => {
    return request(app)
      .get('/sum')
      .query({a: 2})
      .expect(400, 'Value for b is needed');
  });

  it('should return 400 if a is not numeric', () => {
    return request(app)
      .get('/sum')
      .query({a: 'a', b: 4})
      .expect(400, 'Value for a must be numeric');
  });

  it('should return 400 if b is not numeric', () => {
    return request(app)
      .get('/sum')
      .query({a: 8, b: 'b'})
      .expect(400, 'Value for b must be numeric');
  });

  it('should return 400 if b == 0', () => {
    return request(app)
      .get('/sum')
      .query({a: 8, b: 0})
      .expect(400, 'Cannot divide by 0');
  });

});
