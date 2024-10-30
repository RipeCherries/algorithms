/**
 * Проверяет, является ли число чётным.
 *
 * @param {number} num - Число для проверки на чётность.
 * @return {boolean} - Возвращает `true`, если число чётное, и `false`, если нечётное.
 * @throws {Error} - Если значение не является целым числом.
 *
 * @example
 * // Чётное число
 * isEven(4); // true
 *
 * // Нечётное число
 * isEven(3); // false
 *
 * // Не целое число
 * isEven(2.5); // Error: Введенное значение не является целым числом.
 */
export function isEven(num: number): boolean {
  if (!Number.isInteger(num)) {
    throw new Error('Введенное значение не является целым числом.');
  }

  return num % 2 === 0;
}
