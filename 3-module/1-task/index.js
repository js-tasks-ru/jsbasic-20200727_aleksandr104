/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let result = [];
  
  for (let i = 0; i < users.length; i++) {
    result.push(users[i].name);
  }

  return result;
}
