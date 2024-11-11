import { Alphabet, encrypt, decrypt } from './atbash';

describe('cipher | atbash', function () {
  test('encrypts text in Russian alphabet', function () {
    expect(encrypt('Тест')).toBe('Мънм');
  });

  test('decrypts text in Russian alphabet', function () {
    expect(decrypt('Мънм')).toBe('Тест');
  });

  test('encrypts text in English alphabet', function () {
    expect(encrypt('Hello', Alphabet.EN)).toBe('Svool');
  });

  test('decrypts text in English alphabet', function () {
    expect(decrypt('Svool', Alphabet.EN)).toBe('Hello');
  });

  test('encrypts text with custom alphabet', function () {
    expect(encrypt('123&?324', '1234567890!@#$%^&*()-_=+')).toBe('+=_8?_=-');
  });

  test('decrypts text with custom alphabet', function () {
    expect(decrypt('+=_8?_=-', '1234567890!@#$%^&*()-_=+')).toBe('123&?324');
  });

  test('encrypts empty string', function () {
    expect(encrypt('')).toBe('');
  });

  test('decrypts empty string', function () {
    expect(decrypt('')).toBe('');
  });
});
