/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(", ").join("|").split(" ").join("|").split("|");
  let result = {
    min: 0,
    max: 0
  };

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (isNaN(arr[i])) {
      arr.splice(i, 1);
    }
  }

  result.min = Math.min(...arr);
  result.max = Math.max(...arr);

  return result;
}
