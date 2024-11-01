import { floor } from './floor';

describe('math | floor', function () {
  test('should round down positive decimal numbers', function () {
    expect(floor(4.2)).toBe(4);
    expect(floor(4.9)).toBe(4);
  });

  test('should round down negative decimal numbers', function () {
    expect(floor(-4.2)).toBe(-5);
    expect(floor(-4.9)).toBe(-5);
  });

  test('should return the same number if it is an integer', function () {
    expect(floor(4)).toBe(4);
    expect(floor(-7)).toBe(-7);
    expect(floor(0)).toBe(0);
  });

  test('should round down very small positive decimals', function () {
    expect(floor(0.0001)).toBe(0);
  });

  test('should round down very small negative decimals', function () {
    expect(floor(-0.0001)).toBe(-1);
  });

  test('should round down very large positive decimals', function () {
    expect(floor(123456789.123)).toBe(123456789);
  });

  test('should round down very large negative decimals', function () {
    expect(floor(-123456789.123)).toBe(-123456790);
  });
});
