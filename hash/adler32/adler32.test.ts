import { adler32 } from './adler32';

describe('hash | adler32', function () {
  test('calculates checksum for a simple string', function () {
    expect(adler32('hello')).toBe(103547413);
  });

  test('calculates checksum for an empty string', function () {
    expect(adler32('')).toBe(1);
  });

  test('calculates checksum for a single character', function () {
    expect(adler32('a')).toBe(6422626);
  });

  test('calculates checksum for a string with special characters', function () {
    expect(adler32('hello!@#')).toBe(225510041);
  });
});
