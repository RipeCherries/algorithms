/**
 * Сортирует массив чисел методом вставки.
 *
 * @param {number[]} arr - Массив чисел, который нужно отсортировать.
 * @return {number[]} - Отсортированный по возрастанию массив чисел.
 *
 * @example
 * // Сортировка массива
 * insertionSort([5, 2, 9, 1, 5, 6]); // [1, 2, 5, 5, 6, 9]
 */
export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; ++i) {
    const tmp = arr[i];
    for (let j = i - 1; j >= 0; --j) {
      if (arr[j] < tmp) {
        break;
      }

      arr[j + 1] = arr[j];
      arr[j] = tmp;
    }
  }
  return arr;
}
