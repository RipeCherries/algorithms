/**
 * Сортирует массив методом гномьей сортировки (Gnome Sort).
 *
 * @param {number[]} arr - Массив чисел, который нужно отсортировать.
 * @return {number[]} - Отсортированный массив чисел.
 *
 * @example
 * // Сортировка массива
 * gnomeSort([5, 3, 2, 4, 1]); // [1, 2, 3, 4, 5]
 */
export function gnomeSort(arr: number[]): number[] {
  let index = 0;

  while (index < arr.length) {
    if (index === 0) {
      index++;
    } else if (arr[index] >= arr[index - 1]) {
      index++;
    } else {
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      index--;
    }
  }

  return arr;
}
