import { describe, it } from 'mocha';
import { expect } from 'chai';
import isEmpty from '../src/isEmpty';

// Describe the test suite for isEmpty function
describe('isEmpty', () => {
  // Test case 1
  it('should return true for null', () => {
    const result = isEmpty(null);
    expect(result).to.equal(true);
  });

  // Test case 2
  it('should return true for true', () => {
    const result = isEmpty(true);
    expect(result).to.equal(true);
  });

  // Test case 3
  it('should return true for 1', () => {
    const result = isEmpty(1);
    expect(result).to.equal(true);
  });

  // Test case 4
  it('should return false for non-empty array', () => {
    const result = isEmpty([1, 2, 3]);
    expect(result).to.equal(false);
  });

  // Test case 5
  it('should return false for non-empty string', () => {
    const result = isEmpty('abc');
    expect(result).to.equal(false);
  });

  // Test case 6
  it('should return false for non-empty object', () => {
    const result = isEmpty({ 'a': 1 });
    expect(result).to.equal(false);
  });

  // Test case 7
  it('should return true for empty array', () => {
    const result = isEmpty([]);
    expect(result).to.equal(true);
  });

  // Test case 8
  it('should return true for empty string', () => {
    const result = isEmpty('');
    expect(result).to.equal(true);
  });

  // Test case 9
  it('should return true for empty object', () => {
    const result = isEmpty({});
    expect(result).to.equal(true);
  });

});
