import { describe, it } from 'mocha';
import { expect } from 'chai';
import toInteger from '../src/toInteger';

// Describe the test suite for toInteger function
describe('toInteger', () => {
  // Test case 1
  it('should convert a decimal number to an integer', () => {
    const result = toInteger(3.2);
    expect(result).to.equal(3);
  });

  // Test case 2
  it('should convert Number.MIN_VALUE to 0', () => {
    const result = toInteger(Number.MIN_VALUE);
    expect(result).to.equal(0);
  });

  // Test case 3
  it('should handle Infinity by returning a large positive integer', () => {
    const result = toInteger(Infinity);
    expect(result).to.equal(Number.MAX_VALUE);
  });

  // Test case 4
  it('should convert a string representation of a decimal to an integer', () => {
    const result = toInteger('3.2');
    expect(result).to.equal(3);
  });


});
