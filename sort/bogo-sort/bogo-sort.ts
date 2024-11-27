/**
 * Сортирует массив методом BogoSort (случайной сортировки).
 *
 * @param {number[]} arr - Массив чисел, который нужно отсортировать.
 * @return {number[]} - Отсортированный массив чисел.
 *
 * @example
 * // Сортировка массива
 * bogoSort([3, 2, 1]); // [1, 2, 3]
 */
export function bogoSort(arr: number[]): number[] {
  function isSorted(): boolean {
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }

    return true;
  }

  function shuffle(): void {
    for (let i = arr.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  while (!isSorted()) {
    shuffle();
  }

  return arr;
}
