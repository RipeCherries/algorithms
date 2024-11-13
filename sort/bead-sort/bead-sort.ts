/**
 * Сортирует массив натуральных чисел методом бусинной сортировки.
 *
 * @param {number[]} arr - Массив натуральных чисел, который нужно отсортировать.
 * @return {number[]} -  Отсортированный массив чисел по возрастанию.
 * @throws {Error} - Если массив содержит не натуральное число.
 *
 * @example
 * // Сортировка массива
 * beadSort([5, 3, 1, 7, 4]); // [1, 3, 4, 5, 7]
 */
export function beadSort(arr: number[]): number[] {
  if (arr.some((num) => num < 0 || !Number.isInteger(num))) {
    throw new Error('Поддерживаются только натуральные числа.');
  }

  const max = Math.max(...arr);
  const beads = Array.from({ length: arr.length }, () => Array(max).fill(0));

  // Построение бусин на стержнях
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i]; j++) {
      beads[i][j] = 1;
    }
  }

  // Падение бусин вниз
  for (let j = 0; j < max; ++j) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
      sum += beads[i][j];
      beads[i][j] = 0;
    }
    for (let i = arr.length - sum; i < arr.length; ++i) {
      beads[i][j] = 1;
    }
  }

  // Подсчет высоты бусин для каждого элемента
  for (let i = 0; i < arr.length; ++i) {
    let count = 0;
    for (let j = 0; j < max; ++j) {
      if (beads[i][j] === 0) {
        break;
      }
      count++;
    }
    arr[i] = count;
  }

  return arr;
}
