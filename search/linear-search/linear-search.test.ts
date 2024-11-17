import { linearSearch } from './linear-search';

describe('search | linear-search', function () {
  test('returns index of the target when element is in the array', function () {
    expect(linearSearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  test('returns -1 when the element is not in the array', function () {
    expect(linearSearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  test('returns -1 for an empty array', function () {
    expect(linearSearch([], 5)).toBe(-1);
  });
});
