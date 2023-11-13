// add.test.js
const { expect } = require('chai');
const add = require('./add');

describe('add.js', () => {
  it('should add two numbers correctly', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  it('should handle negative numbers', () => {
    const result = add(-6, 4);
    expect(result).to.equal(-2);
  });

  //  muita testejä
});
