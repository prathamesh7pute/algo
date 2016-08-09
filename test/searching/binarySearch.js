import assert from 'assert';

import { binarySearchRecursive, binarySearchIterative } from '../../src/searching/binarySearch.js';

describe('#binary searching', () => {

  describe('#binary searching recursive', () => {

    it('should find an element at start', () => {
      const items = [0, 1, 2, 4, 6, 8, 9];
      const index = binarySearchRecursive(items, 0, 0, items.length);
      assert.equal(index, 0);
    });

    it('should find an element at end', () => {
      const items = [0, 1, 2, 4, 6, 8, 9];
      const index = binarySearchRecursive(items, 9, 0, items.length);
      assert.equal(index, 6);
    });

    it('should find an element in middle', () => {
      const items = [0, 1, 2, 4, 6, 8, 9];
      const index = binarySearchRecursive(items, 4, 0, items.length);
      assert.equal(index, 3);
    });


    it('should find an element in between', () => {
      const items = [0, 1, 2, 4, 6, 8, 9];
      const index = binarySearchRecursive(items, 8, 0, items.length);
      assert.equal(index, 5);
    });

  });

  describe('#binary searching iterative', () => {

    it('should find an element at start', () => {
      const items = [0, 1, 2, 4, 6, 8, 9];
      const index = binarySearchIterative(items, 0);
      assert.equal(index, 0);
    });

    it('should find an element at end', () => {
      const items = [0, 1, 2, 4, 6, 8, 9];
      const index = binarySearchIterative(items, 9);
      assert.equal(index, 6);
    });

    it('should find an element in middle', () => {
      const items = [0, 1, 2, 4, 6, 8, 9];
      const index = binarySearchIterative(items, 4);
      assert.equal(index, 3);
    });


    it('should find an element in between', () => {
      const items = [0, 1, 2, 4, 6, 8, 9];
      const index = binarySearchIterative(items, 8);
      assert.equal(index, 5);
    });

  });

});