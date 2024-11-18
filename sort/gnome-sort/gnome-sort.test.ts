import { gnomeSort } from './gnome-sort';

describe('sort | gnome-sort', function () {
  test('sorts an unsorted array of distinct numbers', function () {
    expect(gnomeSort([5, 3, 2, 4, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns an already sorted array as is', function () {
    expect(gnomeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an array with duplicate numbers', function () {
    expect(gnomeSort([4, 3, 4, 2, 1])).toEqual([1, 2, 3, 4, 4]);
  });

  test('returns an empty array as is', function () {
    expect(gnomeSort([])).toEqual([]);
  });

  test('sorts an array with negative numbers', function () {
    expect(gnomeSort([-3, -1, -4, -2])).toEqual([-4, -3, -2, -1]);
  });

  test('sorts an array with mixed positive and negative numbers', function () {
    expect(gnomeSort([3, -1, 0, -2, 5])).toEqual([-2, -1, 0, 3, 5]);
  });
});
