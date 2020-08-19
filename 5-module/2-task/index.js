
function toggleText() {
  div = document.getElementById('text');

  button = document.querySelector('.toggle-text-button')
  button.addEventListener('click', () => {
    if (div.hasAttribute('hidden')) {
      div.removeAttribute('hidden');
    } else {
      div.setAttribute('hidden', "true");
    }
  }); 
}