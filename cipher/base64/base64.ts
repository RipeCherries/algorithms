const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/**
 * Кодирует текстовую строку в формат Base64.
 *
 * @param {string} text - Текст для кодирования.
 * @return {string} - Закодированная строка в формате Base64.
 *
 * @example
 * // Кодирование строки в Base64
 * encode("Hello"); // "SGVsbG8="
 */
export function encode(text: string): string {
  const bytes: number[] = Array.from(text).map(function (char) {
    return char.charCodeAt(0);
  });

  let result = '';

  for (let i = 0; i < bytes.length; i += 3) {
    const byte1 = bytes[i];
    const byte2 = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const byte3 = i + 2 < bytes.length ? bytes[i + 2] : 0;

    const combined = (byte1 << 16) | (byte2 << 8) | byte3;

    result += base64Chars[(combined >> 18) & 63];
    result += base64Chars[(combined >> 12) & 63];
    result += i + 1 < bytes.length ? base64Chars[(combined >> 6) & 63] : '=';
    result += i + 2 < bytes.length ? base64Chars[combined & 63] : '=';
  }

  return result;
}

/**
 * Декодирует строку в формате Base64 в исходный текст.
 *
 * @param {string} text - Строка в формате Base64 для декодирования.
 * @return {string} - Декодированный исходный текст.
 * @throws {Error} - Если входные данные не соответствуют формату Base64.
 *
 * @example
 * // Декодирование строки из Base64
 * decode("SGVsbG8=");  // "Hello"
 */
export function decode(text: string): string {
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(text)) {
    throw new Error('Неверный формат входных данных.');
  }

  text = text.replace(/=+$/, '');

  const bytes: number[] = [];

  for (let i = 0; i < text.length; i += 4) {
    const index1 = base64Chars.indexOf(text[i]);
    const index2 = base64Chars.indexOf(text[i + 1]);
    const index3 = i + 2 < text.length ? base64Chars.indexOf(text[i + 2]) : 0;
    const index4 = i + 3 < text.length ? base64Chars.indexOf(text[i + 3]) : 0;

    const combined = (index1 << 18) | (index2 << 12) | (index3 << 6) | index4;

    bytes.push((combined >> 16) & 0xff);

    if (i + 2 < text.length) {
      bytes.push((combined >> 8) & 0xff);
    }

    if (i + 3 < text.length) {
      bytes.push(combined & 0xff);
    }
  }

  return String.fromCharCode(...bytes);
}
