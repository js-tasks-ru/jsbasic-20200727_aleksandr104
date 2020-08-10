/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let result = arr.filter(value => 
    (value >= a && value <= b));

  return result;
}
