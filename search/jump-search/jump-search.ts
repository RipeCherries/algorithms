/**
 * Выполняет поиск заданного числа в отсортированном массиве методом прыжков (Jump Search).
 *
 * @param {number[]} arr - Отсортированный по возрастанию массив чисел.
 * @param {number} target - Число, которое нужно найти в массиве.
 * @return {number} - Индекс найденного элемента в массиве или -1, если элемент не найден.
 * @throws {Error} - Если массив не отсортирован по возрастанию.
 *
 * @example
 * // Поиск числа 5 в отсортированном массиве
 * jumpSearch([1, 3, 5, 7, 9], 5); // 2
 *
 * // Поиск числа, которого нет в массиве
 * jumpSearch([1, 3, 5, 7, 9], 4); // -1
 */
export function jumpSearch(arr: number[], target: number): number {
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i - 1] > arr[i]) {
      throw new Error('Массив должен быть отсортирован по возрастанию.');
    }
  }

  let step = Math.floor(Math.sqrt(arr.length));
  let prevBlock = 0;

  // Поиск блока, где может быть искомый элемент
  while (arr[Math.min(step, arr.length) - 1] < target) {
    prevBlock = step;
    step += step;

    if (prevBlock >= arr.length) {
      return -1;
    }
  }

  // Линейный поиск внутри блока
  for (let i = prevBlock; i < Math.min(step, arr.length); ++i) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
