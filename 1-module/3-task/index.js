/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let firstSymbol;
  let partStr;
  let newStr;

  firstSymbol = str.charAt(0);
  partStr = str.slice(1);
  firstSymbol = firstSymbol.toUpperCase();
  
  newStr = firstSymbol + partStr;

  return newStr;
}
