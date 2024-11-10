import { encode, decode } from './base64';

describe('cipher | base64', function () {
  test('encodes a simple string', function () {
    expect(encode('Hello')).toBe('SGVsbG8=');
  });

  test('decodes a simple Base64 string', function () {
    expect(decode('SGVsbG8=')).toBe('Hello');
  });

  test('encodes an empty string', function () {
    expect(encode('')).toBe('');
  });

  test('decodes an empty Base64 string', function () {
    expect(decode('')).toBe('');
  });

  test('encodes a string with special characters', function () {
    expect(encode('Test123!@#')).toBe('VGVzdDEyMyFAIw==');
  });

  test('decodes a Base64 string with special characters', function () {
    expect(decode('VGVzdDEyMyFAIw==')).toBe('Test123!@#');
  });

  test('throws error for invalid Base64 format', function () {
    expect(function () {
      decode('SGVsbG8*');
    }).toThrow('Неверный формат входных данных.');
  });
});
