/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  let typeKey = "";
  
  for (let key in salaries) {
    typeKey = typeof (salaries[key]);
    
    if (typeKey == "number"){
    sum += salaries[key];
    }
  }
  
  return sum;
}
