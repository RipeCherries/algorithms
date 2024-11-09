import { Alphabet, encrypt, decrypt } from './caesar-cipher';

describe('cipher | caesar-cipher', function () {
  test('should encrypt Russian text with positive shift', function () {
    expect(encrypt('Привет', 3)).toBe('Тулезх');
  });

  test('should decrypt Russian text with positive shift', function () {
    expect(decrypt('Тулезх', 3)).toBe('Привет');
  });

  test('should encrypt Russian text with negative shift', function () {
    expect(encrypt('Привет', -3)).toBe('Мнёявп');
  });

  test('should decrypt Russian text with negative shift', function () {
    expect(decrypt('Мнёявп', -3)).toBe('Привет');
  });

  test('should encrypt Russian text with shift larger than alphabet length', function () {
    expect(encrypt('Привет', 50)).toBe('Абщтхг');
  });

  test('should decrypt Russian text with shift larger than alphabet length', function () {
    expect(decrypt('Абщтхг', 50)).toBe('Привет');
  });

  test('should encrypt Russian text with shift smaller than negative alphabet length', function () {
    expect(encrypt('Привет', -50)).toBe('Яашсфв');
  });

  test('should decrypt Russian text with shift smaller than negative alphabet length', function () {
    expect(decrypt('Яашсфв', -50)).toBe('Привет');
  });

  test('should encrypt Russian text with special characters preserved', function () {
    expect(encrypt('Привет!', 3)).toBe('Тулезх!');
  });

  test('should decrypt Russian text with special characters preserved', function () {
    expect(decrypt('Тулезх!', 3)).toBe('Привет!');
  });

  test('should encrypt English text with positive shift', function () {
    expect(encrypt('Hello', 3, Alphabet.EN)).toBe('Khoor');
  });

  test('should decrypt English text with positive shift', function () {
    expect(decrypt('Khoor', 3, Alphabet.EN)).toBe('Hello');
  });

  test('should encrypt English text with negative shift', function () {
    expect(encrypt('Hello', -3, Alphabet.EN)).toBe('Ebiil');
  });

  test('should decrypt English text with negative shift', function () {
    expect(decrypt('Ebiil', -3, Alphabet.EN)).toBe('Hello');
  });

  test('should encrypt English text with shift larger than alphabet length', function () {
    expect(encrypt('Hello', 50, Alphabet.EN)).toBe('Fcjjm');
  });

  test('should decrypt English text with shift larger than alphabet length', function () {
    expect(decrypt('Fcjjm', 50, Alphabet.EN)).toBe('Hello');
  });

  test('should encrypt English text with shift smaller than negative alphabet length', function () {
    expect(encrypt('Hello', -50, Alphabet.EN)).toBe('Jgnnq');
  });

  test('should decrypt English text with shift smaller than negative alphabet length', function () {
    expect(decrypt('Jgnnq', -50, Alphabet.EN)).toBe('Hello');
  });

  test('should encrypt English text with special characters preserved', function () {
    expect(encrypt('Hello, World!', 3, Alphabet.EN)).toBe('Khoor, Zruog!');
  });

  test('should decrypt English text with special characters preserved', function () {
    expect(decrypt('Khoor, Zruog!', 3, Alphabet.EN)).toBe('Hello, World!');
  });

  test('should return an empty string if input text is empty', function () {
    expect(encrypt('', 8)).toBe('');
    expect(decrypt('', 15, Alphabet.EN)).toBe('');
  });

  test('should return the original text if shift is zero', function () {
    expect(encrypt('Привет, Мир!', 0)).toBe('Привет, Мир!');
    expect(decrypt('Hello, World!', 0, Alphabet.EN)).toBe('Hello, World!');
  });

  test('should throw an error if shift is not an integer', function () {
    expect(function () {
      encrypt('Hello', 3.5, Alphabet.EN);
    }).toThrow('Параметр shift должен быть целым числом.');

    expect(function () {
      decrypt('Khoor', 7.6, Alphabet.EN);
    }).toThrow('Параметр shift должен быть целым числом.');
  });

  test('should encrypt text with custom alphabet', function () {
    expect(encrypt('123&?324', 6, '1234567890!@#$%^&*()-_=+')).toBe('789=?980');
  });

  test('should decrypt text with custom alphabet', function () {
    expect(decrypt('789=?980', 6, '1234567890!@#$%^&*()-_=+')).toBe('123&?324');
  });
});
