/**
 * Округляет число в меньшую сторону до ближайшего целого числа.
 *
 * @param {number} num - Число, которое нужно округлить.
 * @return {number} - Округленное число.
 *
 * @example
 * // Округление положительных чисел
 * floor(4.7); // 4
 * floor(7);   // 7
 *
 * // Округление отрицательных чисел
 * floor(-4.2); // -5
 */
export function floor(num: number): number {
  if (num % 1 === 0) {
    return num;
  }

  return num > 0 ? num - (num % 1) : num - (num % 1) - 1;
}
