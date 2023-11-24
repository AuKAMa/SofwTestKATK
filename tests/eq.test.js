import { describe, it } from 'mocha';
import { expect } from 'chai';
import eq from '../src/eq';
import baseSum from '../src/baseSum';

// Describe the test suite for eq function
describe('eq', () => {
  // Test case 1
  it('should return true for equivalent values', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).to.equal(true);
  });

  // Test case 2
  it('should return false for non-equivalent values', () => {
    const object1 = { 'a': 1 };
    const object2 = { 'a': 1 };
    expect(eq(object1, object2)).to.equal(false);
  });


});

// Describe the test suite for Integration Test - eq with baseSum
describe('Integration Test - eq with baseSum', () => {
  // Test case 1
  it('should work correctly with baseSum function', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [1, 2, 3, 4, 5];
    const iteratee = (value) => value;

    const result1 = baseSum(array1, iteratee);
    const result2 = baseSum(array2, iteratee);

    // Check if the results are equivalent using eq function
    expect(eq(result1, result2)).to.equal(true);
  });


});

