/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  for (let i = 0; i < friends.length; i++) {
    friend = friends[i];
   
    let li = document.createElement('li');
    li.innerHTML = friend.firstName + ' ' + friend.lastName;   
    ul.append(li);
  }  

  return ul;
}
