/**
 * Вычисляет факториал заданного натурального числа.
 *
 * @param {number} num - Натуральное число, для которого вычисляется факториал.
 * @return {number} - Факториал заданного числа.
 * @throws {Error} - Если число не является натуральным.
 *
 * @example
 * // Факториал 5
 * factorial(5); // 120
 *
 * // Факториал не натурального числа
 * factorial(-1);  // Error: Поддерживаются только натуральные числа.
 * factorial(1.5); // Error: Поддерживаются только натуральные числа.
 */
export function factorial(num: number): number {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error('Поддерживаются только натуральные числа.');
  }

  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}
