/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let newStr = "";

  for (let i = 0; i < users.length; i++) {
    let user = {};

    user = users[i];

    if (user["age"] <= age) {

      if (newStr.length != 0) {
        newStr = newStr + "\n";
      }

      newStr = newStr + user["name"] + ", " + user["balance"];
    }
  }

  return newStr;
}
