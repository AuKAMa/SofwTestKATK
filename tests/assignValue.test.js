import { describe, it } from 'mocha';
import { expect } from 'chai';
import assignValue from '../src/assignValue';

describe('assignValue', () => {
  // Test case 1
  it('should assign value to key if the existing value is not equivalent', () => {
    const object = { key: 'oldValue' };
    const key = 'key';
    const value = 'newValue';

    assignValue(object, key, value);

    // Check if the value has been assigned
    expect(object[key]).to.equal(value);
  });

  // Test case 2
  it('should not assign value if the existing value is equivalent', () => {
    const object = { key: 'value' };
    const key = 'key';
    const value = 'value';

    assignValue(object, key, value);

    // Check if the value has not been assigned
    expect(object[key]).to.not.equal(value);
  });


});
