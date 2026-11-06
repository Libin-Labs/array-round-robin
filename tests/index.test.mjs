import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('interleaves equal lists', () => {
  assert.deepEqual(
    api.roundRobin([
      ['a', 'b'],
      [1, 2],
    ]),
    ['a', 1, 'b', 2],
  );
});
test('handles unequal lists', () => {
  assert.deepEqual(api.roundRobin([[1, 2, 3], ['a']]), [1, 'a', 2, 3]);
});
test('skips empty lists', () => {
  assert.deepEqual(api.roundRobin([[], [1], []]), [1]);
});
test('handles no lists', () => {
  assert.deepEqual(api.roundRobin([]), []);
});
test('supports generic values', () => {
  assert.deepEqual(api.roundRobin([[{ x: 1 }], [{ x: 2 }]]), [{ x: 1 }, { x: 2 }]);
});
test('rejects non-array input', () => {
  assert.throws(() => api.roundRobin('bad'), TypeError);
});
