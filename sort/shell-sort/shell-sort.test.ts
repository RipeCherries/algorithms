import { shellSort } from './shell-sort';

describe('sort | shell-sort', function () {
  test('sorts an unsorted array of distinct numbers', function () {
    expect(shellSort([5, 3, 2, 4, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns an already sorted array as is', function () {
    expect(shellSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an array with duplicate numbers', function () {
    expect(shellSort([4, 3, 4, 2, 1])).toEqual([1, 2, 3, 4, 4]);
  });

  test('handles an array with all identical numbers', function () {
    expect(shellSort([3, 3, 3, 3])).toEqual([3, 3, 3, 3]);
  });

  test('returns an empty array as is', function () {
    expect(shellSort([])).toEqual([]);
  });

  test('sorts an array with negative numbers', function () {
    expect(shellSort([-3, -1, -4, -2])).toEqual([-4, -3, -2, -1]);
  });

  test('sorts an array with mixed positive and negative numbers', function () {
    expect(shellSort([3, -1, 0, -2, 5])).toEqual([-2, -1, 0, 3, 5]);
  });

  test('sorts an array with floating-point numbers', function () {
    expect(shellSort([3.1, 2.9, 0.5, -1.1, 2.2])).toEqual([-1.1, 0.5, 2.2, 2.9, 3.1]);
  });
});
