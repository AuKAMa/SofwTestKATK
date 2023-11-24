const { expect } = require('chai');
import reduce from '../src/reduce';

describe('reduce', () => {
  it('Reduces an array of numbers to their sum', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it('Reduces an object to an accumulated value', () => {
    const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('Uses the first element of the array as the initial value if not provided', () => {
    const result = reduce([1, 2, 3], (product, n) => product * n);
    expect(result).to.equal(6);
  });

  // Add more ?...
});
