import { describe, it } from 'mocha';
import { expect } from 'chai';
import baseSum from '../src/baseSum';

// Describe the test suite
describe('baseSum', () => {
  // Test case 1
  it('should return the sum of numbers in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (value) => value;

    const result = baseSum(array, iteratee);

    // Check if the result is equal to the expected sum
    expect(result).to.equal(15);
  });

  // Test case 2
  it('should return the sum of numbers after applying the iteratee function', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (value) => value * 2;

    const result = baseSum(array, iteratee);

    // Check if the result is equal to the expected sum after applying the iteratee
    expect(result).to.equal(30);
  });

  // Test case 3
  it('should handle arrays with undefined values', () => {
    const array = [1, undefined, 3, 4, 5];
    const iteratee = (value) => value;

    const result = baseSum(array, iteratee);

    // Check if the result is equal to the expected sum, ignoring undefined values
    expect(result).to.equal(13);
  });


});
