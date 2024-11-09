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
 * Шифрует текст с использованием шифра Цезаря.
 *
 * @param {string} text - Текст, который нужно зашифровать.
 * @param {number} shift - Смещение для шифра. Должно быть целым числом.
 * @param {string} alphabet - Алфавит, используемый для шифрования.
 * @return {string} - Зашифрованный текст.
 * @throws {Error} - Если shift не является целым числом.
 *
 * @example
 * // Шифрование русского текста
 * encrypt("Привет", 3);  // "Тулезх"
 *
 * // Шифрование англиского текста
 * encrypt("Hello", 3, Alphabet.EN);  // "Khoor"
 *
 * // Шифрование с использованием собственного алфавита
 * encrypt("123&?324", 6, "1234567890!@#$%^&*()-_=+");  // "789=?980"
 */
export function encrypt(text: string, shift: number, alphabet: string = Alphabet.RU): string {
  if (!text || shift === 0) {
    return text;
  }

  if (!Number.isInteger(shift)) {
    throw new Error('Параметр shift должен быть целым числом.');
  }

  let result = '';

  for (let i = 0; i < text.length; ++i) {
    const char = text[i];
    const isUpperCase = char === char.toUpperCase();
    const index = alphabet.indexOf(char.toUpperCase());

    if (index !== -1) {
      let newIndex = (index + shift) % alphabet.length;

      if (newIndex < 0) {
        newIndex += alphabet.length;
      }

      const newChar = isUpperCase ? alphabet[newIndex] : alphabet[newIndex].toLowerCase();
      result += newChar;
    } else {
      result += char;
    }
  }

  return result;
}

/**
 * Расшифровывает текст, зашифрованный шифром Цезаря.
 *
 * @param {string} text - Текст, который нужно расшифровать.
 * @param {number} shift - Смещение, использованное при шифровании. Должно быть целым числом.
 * @param {string} alphabet - Алфавит, использованный для шифрования.
 * @return {string} - Расшифрованный текст.
 * @throws {Error} - Если shift не является целым числом.
 *
 * @example
 * // Расшифровка русского текста
 * decrypt("Тулезх", 3);  // "Привет"
 *
 * // Расшифровка английского текста
 * decrypt("Khoor", 3, Alphabet.EN);  // "Hello"
 *
 * // Расшифровка с использованием собственного алфавита
 * decrypt("789=?980", 6, "1234567890!@#$%^&*()-_=+");  // "123&?324"
 */
export function decrypt(text: string, shift: number, alphabet: string = Alphabet.RU): string {
  return encrypt(text, -shift, alphabet);
}
