/**
 * Выполняет бинарный поиск заданного числа в отсортированном массиве.
 *
 * @param {number[]} arr - Отсортированный по возрастанию массив чисел.
 * @param {number} target - Число для поиска в массиве.
 * @return {number} - Индекс найденного элемента в массиве или -1, если элемент не найден.
 * @throws {Error} - Если массив не отсортирован по возрастанию.
 *
 * @example
 * // Поиск числа 5 в отсортированном массиве
 * binarySearch([1, 3, 5, 7, 9], 5); // 2
 *
 * // Поиск числа, которого нет в массиве
 * binarySearch([1, 3, 5, 7, 9], 4); // -1
 */
export function binarySearch(arr: number[], target: number): number {
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i - 1] > arr[i]) {
      throw new Error('Массив должен быть отсортирован по возрастанию.');
    }
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
