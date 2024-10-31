/**
 * Проверяет, является ли число нечётным.
 *
 * @param {number} num - Число для проверки на нечётность.
 * @return {boolean} - Возвращает `true`, если число нечётное, и `false`, если чётное.
 * @throws {Error} - Если значение не является целым числом.
 *
 * @example
 * // Нечётное число
 * isOdd(3); // true
 *
 * // Чётное число
 * isOdd(4); // false
 *
 * // Не целое число
 * isOdd(2.5); // Error: Введенное значение не является целым числом.
 */
export function isOdd(num: number): boolean {
  if (!Number.isInteger(num)) {
    throw new Error('Введенное значение не является целым числом.');
  }

  return num % 2 !== 0;
}
