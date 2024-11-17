/**
 * Выполняет линейный поиск заданного числа в массиве.
 *
 * @param {number[]} arr - Массив чисел для поиска.
 * @param {number} target - Число, которое нужно найти в массиве.
 * @return {number[]} - Индекс найденного элемента в массиве или -1, если элемент не найден.
 *
 * @example
 * // Поиск числа 5 в массиве
 * linearSearch([1, 3, 5, 7, 9], 5); // 2
 *
 * // Поиск числа, которого нет в массиве
 * linearSearch([1, 3, 5, 7, 9], 4); // -1
 */
export function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
