function initCarousel() {
  let countCarousel = 0;
  let slideOffsetCarousel = 0;

  let carousel = document.querySelector('.carousel__inner');
  let carouselLength = carousel.children.length;

  let buttons = document.querySelectorAll('.carousel__arrow');
  for (button of buttons) {
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

      displayArrow(countCarousel, carouselLength);
    })
  }
  displayArrow(countCarousel, carouselLength);
}

function displayArrow(countCarousel, carouselLength) {
  let buttons = document.querySelectorAll('.carousel__arrow');

  for (button of buttons) {
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

