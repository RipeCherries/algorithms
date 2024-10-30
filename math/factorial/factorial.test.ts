import { factorial } from './factorial';

describe('math | factorial', function () {
  test('should return 1 for 0', function () {
    expect(factorial(0)).toBe(1);
  });

  test('should return the correct factorial for positive numbers', function () {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });

  test('should throw an error for negative number', function () {
    expect(function () {
      factorial(-1);
    }).toThrow('Поддерживаются только натуральные числа.');
  });

  test('should throw an error for non-integer number', function () {
    expect(function () {
      factorial(1.5);
    }).toThrow('Поддерживаются только натуральные числа.');
  });
});
