import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    let divCarousel = document.createElement('div');
    divCarousel.classList.add('carousel');

    let divArrow = document.createElement('div');
    divArrow.classList.add('carousel__arrow');
    divArrow.classList.add('carousel__arrow_right');
    let img = document.createElement('img');
    img.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    img.setAttribute('alt', 'icon');
    divArrow.append(img);
    divCarousel.append(divArrow);

    divArrow = document.createElement('div');
    divArrow.classList.add('carousel__arrow');
    divArrow.classList.add('carousel__arrow_left');
    img = document.createElement('img');
    img.setAttribute('src', '/assets/images/icons/angle-left-icon.svg');
    img.setAttribute('alt', 'icon');
    divArrow.append(img);
    divCarousel.append(divArrow);

    let divCarouselInner = document.createElement('div');
    divCarouselInner.classList.add('carousel__inner');

    for (let i = 0; i < slides.length; i++) {
      let slide = slides[i];
      let divCarouselSlide = document.createElement('div');
      divCarouselSlide.classList.add('carousel__slide');
      divCarouselSlide.setAttribute('data-id', slide.id);

      let img = document.createElement('img');
      let imgSource = `/assets/images/carousel/${slide.image}`;
      img.classList.add('carousel__img');
      img.setAttribute('src', imgSource);
      img.setAttribute('alt', 'slide');
      divCarouselSlide.append(img);

      let divCarouselСaption = document.createElement('div');
      divCarouselСaption.classList.add('carousel__caption');

      let span = document.createElement('span');
      span.classList.add('carousel__price');
      span.innerText = "€" + slide.price.toFixed(2);
      divCarouselСaption.append(span);

      let divCarouselTitle = document.createElement('div');
      divCarouselTitle.classList.add('carousel__title');
      divCarouselTitle.innerText = slide.name;
      divCarouselСaption.append(divCarouselTitle);

      let button = document.createElement('button');
      button.type = 'button';
      button.classList.add('carousel__button');
      button.innerHTML = '<img src="/assets/images/icons/plus-icon.svg" alt="icon">';
      button.addEventListener('click', (event) =>
        divCarousel.dispatchEvent(eventProductAdd));
      divCarouselСaption.append(button);

      divCarouselSlide.append(divCarouselСaption);
      divCarouselInner.append(divCarouselSlide);
      
      let eventProductAdd = new CustomEvent("product-add", {
        detail: slide.id,
        bubbles: true
      });
    }
    divCarousel.append(divCarouselInner);
    
    this.elem = divCarousel;
    
    initCarousel(this.elem);
  }
}

function initCarousel(document) {
  let countCarousel = 0;
  let slideOffsetCarousel = 0;

  let carousel = document.querySelector('.carousel__inner');
  let carouselLength = carousel.children.length;

  let buttons = document.querySelectorAll('.carousel__arrow');
  for (let button of buttons) {
    button.addEventListener('click', function() {
      let slide = document.querySelector('.carousel__slide');
      let slideOffset = slide.offsetWidth;
      let classButton = this.classList[1];

      if (classButton == 'carousel__arrow_right') {
        slideOffset = -slideOffset;
      };

      countCarousel = countCarousel + Math.sign(slideOffset);
      slideOffsetCarousel = slideOffsetCarousel + slideOffset;
      carousel.style.transform = `translateX(${slideOffsetCarousel}px)`;

      displayArrow(document, countCarousel, carouselLength);
    })
  }
  displayArrow(document, countCarousel, carouselLength);
}

function displayArrow(document, countCarousel, carouselLength) {
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