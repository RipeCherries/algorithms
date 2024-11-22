/**
 * Сортирует массив методом слияния (Merge Sort).
 *
 * @param {number[]} arr - Массив чисел, который нужно отсортировать.
 * @return {number[]} - Отсортированный массив чисел.
 *
 * @example
 * // Сортировка массива с использованием Merge Sort
 * mergeSort([5, 3, 2, 4, 1]); // [1, 2, 3, 4, 5]
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftPart = arr.slice(0, middle);
  const rightPart = arr.slice(middle);

  function merge(leftPart: number[], rightPart: number[]): number[] {
    const result = [];
    let i = 0;
    let j = 0;

    // Слияние двух отсортированных массивов
    while (i < leftPart.length && j < rightPart.length) {
      if (leftPart[i] <= rightPart[j]) {
        result.push(leftPart[i]);
        i++;
      } else {
        result.push(rightPart[j]);
        j++;
      }
    }

    // Добавление оставшихся элементов
    while (i < leftPart.length) {
      result.push(leftPart[i]);
      i++;
    }

    while (j < rightPart.length) {
      result.push(rightPart[j]);
      j++;
    }

    return result;
  }

  return merge(mergeSort(leftPart), mergeSort(rightPart));
}
