import { binarySearch } from './binary-search';

describe('search | binary-search', function () {
  test('finds the target in a sorted array', function () {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  test('returns -1 when the target is not in the array', function () {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  test('returns -1 for an empty array', function () {
    expect(binarySearch([], 5)).toBe(-1);
  });

  test('throws an error if the array is not sorted in ascending order', function () {
    expect(function () {
      binarySearch([3, 1, 4, 2], 3);
    }).toThrow('Массив должен быть отсортирован по возрастанию.');
  });
});
