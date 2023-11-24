
import { describe, it } from 'mocha';
import { expect } from 'chai';
import get from './path-to-your-get';


describe('get', () => {
  // Test case 1
  it('should get the value at the specified path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const path = 'a[0].b.c';

    const result = get(object, path);

    // Check if the result is equal to the expected value
    expect(result).to.equal(3);
  });

  // Test case 2
  it('should return the default value for undefined resolved values', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const path = 'a.b.c.d';
    const defaultValue = 'default';

    const result = get(object, path, defaultValue);

    // Check if the result is equal to the default value
    expect(result).to.equal(defaultValue);
  });

  // Test case 3
  it('should handle getting value using an array path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const path = ['a', '0', 'b', 'c'];

    const result = get(object, path);

    // Check if the result is equal to the expected value
    expect(result).to.equal(3);
  });


});
