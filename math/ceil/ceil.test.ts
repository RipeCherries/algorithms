import { ceil } from './ceil';

describe('math | ceil', function () {
  test('should round up positive decimal numbers', function () {
    expect(ceil(4.2)).toBe(5);
    expect(ceil(4.9)).toBe(5);
  });

  test('should round up negative decimal numbers', function () {
    expect(ceil(-4.2)).toBe(-4);
    expect(ceil(-4.9)).toBe(-4);
  });

  test('should return the same number if it is an integer', function () {
    expect(ceil(4)).toBe(4);
    expect(ceil(-7)).toBe(-7);
    expect(ceil(0)).toBe(0);
  });

  test('should round up very small positive decimals', function () {
    expect(ceil(0.0001)).toBe(1);
  });

  test('should round up very small negative decimals', function () {
    expect(ceil(-0.0001)).toBe(0);
  });

  test('should round up very large positive decimals', function () {
    expect(ceil(123456789.123)).toBe(123456790);
  });

  test('should round up very large negative decimals', function () {
    expect(ceil(-123456789.123)).toBe(-123456789);
  });
});
