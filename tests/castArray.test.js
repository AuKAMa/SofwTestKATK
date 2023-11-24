import { describe, it } from 'mocha';
import { expect } from 'chai';
import castArray from '../src/castArray';

// Describe the test suite for castArray function
describe('castArray', () => {
  // Test case 1
  it('should cast a non-array value to an array', () => {
    const result = castArray(1);
    expect(result).to.deep.equal([1]);
  });

  // Test case 2
  it('should wrap an object in an array', () => {
    const result = castArray({ 'a': 1 });
    expect(result).to.deep.equal([{ 'a': 1 }]);
  });

  // Test case 3
  it('should wrap a string in an array', () => {
    const result = castArray('abc');
    expect(result).to.deep.equal(['abc']);
  });

  // Test case 4
  it('should wrap null in an array', () => {
    const result = castArray(null);
    expect(result).to.deep.equal([null]);
  });

  // Test case 5
  it('should wrap undefined in an array', () => {
    const result = castArray(undefined);
    expect(result).to.deep.equal([undefined]);
  });

  // Test case 6
  it('should return an empty array if no arguments are provided', () => {
    const result = castArray();
    expect(result).to.deep.equal([]);
  });

  // Test case 7
  it('should return the same array if an array is provided', () => {
    const array = [1, 2, 3];
    const result = castArray(array);
    expect(result).to.equal(array);
  });


});
