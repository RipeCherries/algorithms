import { jumpSearch } from './jump-search';

describe('search | jump-search', function () {
  test('returns index of the target when element is in the array', function () {
    expect(jumpSearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  test('returns -1 when the element is not in the array', function () {
    expect(jumpSearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  test('returns -1 for an empty array', function () {
    expect(jumpSearch([], 5)).toBe(-1);
  });

  test('returns -1 when the target is greater than any element in the array', function () {
    expect(jumpSearch([1, 3, 5, 7, 9], 10)).toBe(-1);
  });

  test('throws an error if the array is not sorted in ascending order', function () {
    expect(function () {
      jumpSearch([1, 9, 5, 7, 3], 5);
    }).toThrow('Массив должен быть отсортирован по возрастанию.');
  });
});
