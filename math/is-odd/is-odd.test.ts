import { isOdd } from './is-odd';

describe('math | isOdd', function () {
  test('should return true for an odd integer', function () {
    expect(isOdd(3)).toBe(true);
  });

  test('should return false for an even integer', function () {
    expect(isOdd(2)).toBe(false);
  });

  test('should return false for zero', function () {
    expect(isOdd(0)).toBe(false);
  });

  test('should return true for a negative odd integer', function () {
    expect(isOdd(-9)).toBe(true);
  });

  test('should return false for a negative even integer', function () {
    expect(isOdd(-6)).toBe(false);
  });

  test('should throw an error for a non-integer number', function () {
    expect(function () {
      isOdd(5.5);
    }).toThrow('Введенное значение не является целым числом.');
  });
});
