import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = this.render(product);
  }
  
  render(product) {
    let divCard = createElement('<div class="card"></div>'); 

    let divCardTop = createElement('<div></div>');

    let innerHtml = `<img src="/assets/images/products/${product.image}"`;
    innerHtml += 'class="card__image" alt="product">'; 

    let img = createElement(innerHtml);
    divCardTop.append(img);

    let span = createElement('<span class="card__price"></span>');
    span.innerText = "€" + product.price.toFixed(2);
    divCardTop.append(span);
    divCard.append(divCardTop);
  
    let divCardBody = createElement('<div class="card__body"></div>'); 
    let divCardTitle = createElement('<div class="card__title"></div>'); 
    divCardTitle.innerText = product.name;
    divCardBody.append(divCardTitle);
    
    innerHtml = `<button type="button" class="card__button">
    <img src="/assets/images/icons/plus-icon.svg" alt="icon">  
    </button>`;  
    let divButton = createElement(innerHtml); 
    divCardBody.append(divButton);

    divCard.append(divCardBody);

    let button = divCard.querySelector('.card__button');
    button.addEventListener('click', (event) =>
    divCard.dispatchEvent(eventProductAdd));

    let eventProductAdd = new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true
    });
    
    return divCard;
  }
}
