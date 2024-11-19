/**
 * Вычисляет контрольную сумму с использованием алгоритма Adler-32.
 *
 * @param {string} text - Строка, для которой вычисляется контрольная сумма.
 * @return {number} - Контрольная сумма Adler-32, представленная в виде 32-битного целого числа.
 *
 * @example
 * // Вычисление контрольной суммы строки
 * adler32("hello"); // 461137531
 */
export function adler32(text: string): number {
  const MOD_ADLER = 65521;

  let a = 1;
  let b = 0;

  for (let i = 0; i < text.length; ++i) {
    a = (a + text.charCodeAt(i)) % MOD_ADLER;
    b = (b + a) % MOD_ADLER;
  }

  return (b << 16) | a;
}
