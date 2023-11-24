import { describe, it } from 'mocha';
import { expect } from 'chai';
import matchesStrictComparable from '../src/matchesStrictComparable';

// Describe the test suite for matchesStrictComparable function
describe('matchesStrictComparable', () => {
  // Test case 1
  it('should return a function that checks strict equality and existence of key', () => {
    const key = 'a';
    const srcValue = 42;
    const matcher = matchesStrictComparable(key, srcValue);

    // Test object with matching key and value
    const matchingObject = { 'a': 42 };
    expect(matcher(matchingObject)).to.equal(true);

    // Test object with non-matching value
    const nonMatchingObject = { 'a': 43 };
    expect(matcher(nonMatchingObject)).to.equal(false);

    // Test object with missing key
    const missingKeyObject = { 'b': 42 };
    expect(matcher(missingKeyObject)).to.equal(false);

    // Test null object
    expect(matcher(null)).to.equal(false);

    // Test undefined object
    expect(matcher(undefined)).to.equal(false);
  });


});
