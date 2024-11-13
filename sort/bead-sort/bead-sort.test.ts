import { beadSort } from './bead-sort';

describe('sort | bead-sort', function () {
  test('sorts an array of natural numbers', function () {
    expect(beadSort([5, 3, 1, 7, 4])).toEqual([1, 3, 4, 5, 7]);
  });

  test('sorts an already sorted array', function () {
    expect(beadSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an array sorted in descending order', function () {
    expect(beadSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an array with duplicate values', function () {
    expect(beadSort([4, 1, 3, 4, 1])).toEqual([1, 1, 3, 4, 4]);
  });

  test('returns an empty array when input is an empty array', function () {
    expect(beadSort([])).toEqual([]);
  });

  test('returns the same array when it has only one element', function () {
    expect(beadSort([42])).toEqual([42]);
  });

  test('sorts an array with all identical elements', function () {
    expect(beadSort([7, 7, 7, 7, 7])).toEqual([7, 7, 7, 7, 7]);
  });

  test('throws an error if the array contains a negative number', function () {
    expect(function () {
      beadSort([5, -3, 1, 7, 4]);
    }).toThrow('Поддерживаются только натуральные числа.');
  });

  test('throws an error if the array contains a non-integer value', function () {
    expect(function () {
      beadSort([5, 3.5, 1, 7, 4]);
    }).toThrow('Поддерживаются только натуральные числа.');
  });
});
