/**
 * Перечисление алфавитов для шифрования.
 *
 * @enum {string}
 * @property {string} RU - Русский алфавит (кириллица).
 * @property {string} EN - Английский алфавит (латиница).
 */
export enum Alphabet {
  RU = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
  EN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

/**
 * Шифрует текст с использованием шифра Абташ.
 *
 * @param {string} text - Текст, который нужно зашифровать.
 * @param {string} alphabet - Алфавит, используемый для шифрования.
 * @return {string} - Зашифрованный текст.
 *
 * @example
 * // Шифрование русского текста
 * encrypt("Привет"); // "Поцэъм"
 *
 * // Шифрование английского текста
 * encrypt("Hello", Alphabet.EN); // "Svool"
 *
 * // Шифрование с использованием собственного алфавита
 * encrypt("123&?324", "1234567890!@#$%^&*()-_=+"); // "+=_8?_=-"
 */
export function encrypt(text: string, alphabet: string = Alphabet.RU): string {
  if (!text) {
    return '';
  }

  const reversedAlphabet = [...alphabet].reverse().join('');

  let result = '';

  for (let i = 0; i < text.length; ++i) {
    const char = text[i];
    const isUpperCase = char === char.toUpperCase();
    const index = alphabet.indexOf(char.toUpperCase());

    if (index !== -1) {
      result += isUpperCase ? reversedAlphabet[index] : reversedAlphabet[index].toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

/**
 * Расшифровывает текст, зашифрованный шифром Абташ.
 *
 * @param {string} text - Текст, который нужно расшифровать.
 * @param {string} alphabet - Алфавит, использованный для шифрования.
 * @return {string} - Расшифрованный текст.
 *
 * @example
 * // Расшифровка русского текста
 * decrypt("Поцэъм"); // "Привет"
 *
 * // Расшифровка английского текста
 * decrypt("Svool", Alphabet.EN); // "Hello"
 *
 * // Расшифровка с использованием собственного алфавита
 * decrypt("+=_8?_=-", "1234567890!@#$%^&*()-_=+"); // "123&?324"
 */
export function decrypt(text: string, alphabet: string = Alphabet.RU): string {
  return encrypt(text, alphabet);
}
