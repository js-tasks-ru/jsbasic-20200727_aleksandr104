import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.elem = this.render(categories);
    
    this.value = '';
  }
 
  render(categories) { 
    let menuObject = this;
    let divRibbon = createElement('<div class="ribbon"></div>');

    let innerHtml = `<button class="ribbon__arrow ribbon__arrow_left">
                      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                    </button>`;
    let button = createElement(innerHtml);
    button.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    })
    divRibbon.append(button);

    let ribbonInner = createElement('<nav class="ribbon__inner"></nav>');
    ribbonInner.addEventListener('scroll', () => {
      this.displayArrow(ribbonInner);
    })

    for (let i = 0; i < categories.length; i++) {
      let category = categories[i];

      innerHtml = `<a href="#" class="ribbon__item" data-id="${category.id}"></a>`;
      let ribbonItem = createElement(innerHtml);
      ribbonItem.innerText = category.name;
      ribbonItem.addEventListener('click' , function(event) {
      menuObject.activateCategory(ribbonInner, ribbonItem),
      event.preventDefault(),
      divRibbon.dispatchEvent(eventRibbonSelect)});

      let eventRibbonSelect = new CustomEvent("ribbon-select", {
        detail: category.id,
        bubbles: true,
        cancelable: true
      });
      ribbonInner.append(ribbonItem);
    }
    divRibbon.append(ribbonInner);

    innerHtml = `<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
                  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                </button>`;
    button = createElement(innerHtml);
    button.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    })
    divRibbon.append(button);

    return divRibbon;
  }

  displayArrow(ribbonInner) {
    let buttons = document.querySelectorAll('.ribbon__arrow');

    for (let button of buttons) {
      let classButton = button.classList[1];
      button.classList.add('ribbon__arrow_visible');
      
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      let isFirstSlide = scrollLeft  < 1 && classButton == 'ribbon__arrow_left';
      let isLastSlide = scrollRight == 0 && classButton == 'ribbon__arrow_right';
  
      if (isFirstSlide || isLastSlide) {
        button.classList.remove('ribbon__arrow_visible');
      }
    }
  }

  activateCategory(ribbonInner, ribbonItem) {
    let ribbonItemActive = ribbonInner.querySelector('.ribbon__item_active');
    if (ribbonItemActive != null) {
      ribbonItemActive.classList.remove('ribbon__item_active');
    };
    ribbonItem.classList.add('ribbon__item_active');
    
    this.value = ribbonItem.dataset.id;
  }
}
