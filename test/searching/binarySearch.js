import assert from 'assert';

import binarySearch from '../../src/searching/binarySearch.js';

describe('#binary searching', () => {

  it('should find an element at start', () => {
    const items = [0, 1, 2, 4, 6, 8, 9];
    const index = binarySearch(items, 0, 0, items.length);
    assert.equal(index, 0);
  });

  it('should find an element at end', () => {
    const items = [0, 1, 2, 4, 6, 8, 9];
    const index = binarySearch(items, 9, 0, items.length);
    assert.equal(index, 6);
  });

  it('should find an element in middle', () => {
    const items = [0, 1, 2, 4, 6, 8, 9];
    const index = binarySearch(items, 4, 0, items.length);
    assert.equal(index, 3);
  });


  it('should find an element in between', () => {
    const items = [0, 1, 2, 4, 6, 8, 9];
    const index = binarySearch(items, 8, 0, items.length);
    assert.equal(index, 5);
  });

});