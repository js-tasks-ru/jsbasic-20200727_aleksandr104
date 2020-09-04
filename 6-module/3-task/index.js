import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.elem = this.render(slides);

    this.initCarousel(this.elem);
  }

  render(slides) {
    let divCarousel = createElement('<div class="carousel"></div>'); 

    let innerHtml = '<div class="carousel__arrow carousel__arrow_right">';
    innerHtml += '<img src="/assets/images/icons/angle-icon.svg" alt="icon">';
    innerHtml += '</div>';
    let divArrow = createElement(innerHtml); 
    divCarousel.append(divArrow);

    innerHtml = '<div class="carousel__arrow carousel__arrow_left">';
    innerHtml += '<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">';
    innerHtml += '</div>';
    divArrow = createElement(innerHtml); 
    divCarousel.append(divArrow);

    let divCarouselInner = createElement('<div class="carousel__inner"></div>'); 
    
    for (let i = 0; i < slides.length; i++) {
      let slide = slides[i];
      innerHtml = '<div class="carousel__slide"';
      innerHtml += `data-id="${slide.id}"</div>`; 
      let divCarouselSlide = createElement(innerHtml);

      innerHtml = `<img src="/assets/images/carousel/${slide.image}"`;
      innerHtml += 'class="carousel__img" alt="slide">'; 

      let img = createElement(innerHtml);
      divCarouselSlide.append(img);

      let divCarouselСaption = createElement('<div class="carousel__caption"></div>'); 
   
      let span = createElement('<span class="carousel__price"></span>');
      span.innerText = "€" + slide.price.toFixed(2);
      divCarouselСaption.append(span);

      let divCarouselTitle = createElement('<div class="carousel__title"></div>'); 
      divCarouselTitle.innerText = slide.name;
      divCarouselСaption.append(divCarouselTitle);

      innerHtml = `<button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>`; 
      let button = createElement(innerHtml); 
      divCarouselСaption.append(button);
      
      button.addEventListener('click', (event) =>
      divCarousel.dispatchEvent(eventProductAdd));

      divCarouselSlide.append(divCarouselСaption);
      divCarouselInner.append(divCarouselSlide);

      let eventProductAdd = new CustomEvent("product-add", {
        detail: slide.id,
        bubbles: true
      });
    }
    divCarousel.append(divCarouselInner);

    return divCarousel;
  }

  initCarousel(document) {
    let countCarousel = 0;
    let slideOffsetCarousel = 0;
  
    let carousel = document.querySelector('.carousel__inner');
    let carouselLength = carousel.children.length;
  
    let buttons = document.querySelectorAll('.carousel__arrow');
    for (let button of buttons) {
      button.addEventListener('click', () => {
        let slide = document.querySelector('.carousel__slide');
        let slideOffset = slide.offsetWidth;
        let classButton = button.classList[1];
  
        if (classButton == 'carousel__arrow_right') {
          slideOffset = -slideOffset;
        };
  
        countCarousel = countCarousel + Math.sign(slideOffset);
        slideOffsetCarousel = slideOffsetCarousel + slideOffset;
        carousel.style.transform = `translateX(${slideOffsetCarousel}px)`;
        
        this.displayArrow(document, countCarousel, carouselLength);
      })
    }
    
    this.displayArrow(document, countCarousel, carouselLength);
  }
  
  displayArrow(document, countCarousel, carouselLength) {
    let buttons = document.querySelectorAll('.carousel__arrow');
  
    for (let button of buttons) {
      let classButton = button.classList[1];
      button.style.display = '';
  
      let isFirstSlide = countCarousel == 0 && classButton == 'carousel__arrow_left';
      let isLastSlide = -countCarousel == carouselLength - 1
        && classButton == 'carousel__arrow_right';
  
      if (isFirstSlide || isLastSlide) {
        button.style.display = 'none';
      }
    }
  }

}
