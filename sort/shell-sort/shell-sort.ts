/**
 * Сортирует массив методом Шелла (Shell Sort).
 *
 * @param {number[]} arr - Массив чисел, который нужно отсортировать.
 * @return {number[]} - Отсортированный массив чисел.
 *
 * @example
 * // Сортировка массива с использованием Shell Sort
 * shellSort([5, 3, 2, 4, 1]); // [1, 2, 3, 4, 5]
 */
export function shellSort(arr: number[]): number[] {
  let step = Math.floor(arr.length / 2);

  while (step > 0) {
    for (let i = step; i < arr.length; ++i) {
      let j = i;
      let delta = j - step;

      while (delta >= 0 && arr[delta] > arr[j]) {
        [arr[delta], arr[j]] = [arr[j], arr[delta]];
        j = delta;
        delta = j - step;
      }
    }

    step = Math.floor(step / 2);
  }

  return arr;
}
