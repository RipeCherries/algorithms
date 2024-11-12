import { insertionSort } from './insertion-sort';

describe('sort | insertion-sort', function () {
  test('sorts an unsorted array of positive numbers', function () {
    expect(insertionSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
  });

  test('sorts an unsorted array of negative numbers', function () {
    expect(insertionSort([-3, -1, -7, -4, -5])).toEqual([-7, -5, -4, -3, -1]);
  });

  test('sorts an array with positive and negative numbers', function () {
    expect(insertionSort([3, -1, 2, -5, 0])).toEqual([-5, -1, 0, 2, 3]);
  });

  test('returns the same array if it is already sorted', function () {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an array with duplicate numbers', function () {
    expect(insertionSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test('sorts an empty array', function () {
    expect(insertionSort([])).toEqual([]);
  });

  test('sorts an array with a single element', function () {
    expect(insertionSort([6])).toEqual([6]);
  });

  test('handles an array with all identical elements', function () {
    expect(insertionSort([9, 9, 9, 9, 9])).toEqual([9, 9, 9, 9, 9]);
  });
});
