/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split("-");
  let newStr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] == "" && i == 1 
      || i > 0) {
        firstSymbol = arr[i].charAt(0);
        partStr = arr[i].slice(1);
        firstSymbol = firstSymbol.toUpperCase(); 
  
        arr[i] = firstSymbol + partStr;  
    }
  }

    newStr = arr.join("");

    return newStr;
}
