import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = this.render(product);
  }
  
  render(product) {
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.setAttribute('data-id', product.id);

    let divCardTop = document.createElement('div');

    let img = document.createElement('img');
    let imgSource = `/assets/images/products/${product.image}`;
    img.classList.add('card__image');
    img.setAttribute('src', imgSource);
    img.setAttribute('alt', 'product');
    divCardTop.append(img);

    let span = document.createElement('span');
    span.classList.add('card__price');
    span.innerText = "€" + product.price.toFixed(2);
    divCardTop.append(span);

    divCard.append(divCardTop);

    let divCardBody = document.createElement('div');
    divCardBody.classList.add('card__body');

    let divCardTitle = document.createElement('div');
    divCardTitle.classList.add('card__title');
    divCardTitle.innerText = product.name;

    divCardBody.append(divCardTitle);

    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add('card__button');
    button.innerHTML = '<img src="/assets/images/icons/plus-icon.svg" alt="icon">';
    button.addEventListener('click', (event) =>
      divCard.dispatchEvent(eventProductAdd));
    divCardBody.append(button);

    divCard.append(divCardBody);

    let eventProductAdd = new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true
    });
    return divCard;
  }
}
