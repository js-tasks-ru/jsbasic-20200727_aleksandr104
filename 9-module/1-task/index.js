/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

export default function promiseClick(button) {
  let promise = new Promise(function(resolve, reject) {
    button.addEventListener('click', () => {
      resolve (event)}, { once: true })
  });

  return promise;
}
