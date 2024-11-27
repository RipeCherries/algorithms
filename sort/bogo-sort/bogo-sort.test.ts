import { bogoSort } from './bogo-sort';

describe('sort | bogo-sort', function () {
  test('sorts an already sorted array', function () {
    expect(bogoSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('sorts an array with elements in descending order', function () {
    expect(bogoSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('sorts an array with duplicate elements', function () {
    expect(bogoSort([2, 1, 2])).toEqual([1, 2, 2]);
  });

  test('sorts an array with a single element', function () {
    expect(bogoSort([1])).toEqual([1]);
  });

  test('returns an empty array as is', function () {
    expect(bogoSort([])).toEqual([]);
  });
});
