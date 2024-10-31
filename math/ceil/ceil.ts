/**
 * Округляет число в большую сторону до ближайшего целого числа.
 *
 * @param {number} num - Число, которое нужно округлить.
 * @return {number} - Округленное число.
 *
 * @example
 * // Округление положительных чисел
 * ceil(4.3); // 5
 * ceil(7);   // 7
 *
 * // Округление отрицательных чисел
 * ceil(-4.6); // -4
 */
export function ceil(num: number): number {
  if (num % 1 === 0) {
    return num;
  }

  return num > 0 ? num - (num % 1) + 1 : num - (num % 1);
}
