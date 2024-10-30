import { isEven } from './is-even';

describe('math | isEven', function () {
  test('should return true for an even integer', function () {
    expect(isEven(4)).toBe(true);
  });

  test('should return false for an odd integer', function () {
    expect(isEven(3)).toBe(false);
  });

  test('should return true for zero', function () {
    expect(isEven(0)).toBe(true);
  });

  test('should return true for a negative even integer', function () {
    expect(isEven(-2)).toBe(true);
  });

  test('should return false for a negative odd integer', function () {
    expect(isEven(-3)).toBe(false);
  });

  test('should throw an error for a non-integer number', function () {
    expect(function () {
      isEven(5.5);
    }).toThrow('Введенное значение не является целым числом.');
  });
});
