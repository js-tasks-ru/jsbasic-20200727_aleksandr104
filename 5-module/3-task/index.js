function initCarousel() {
  let countCarousel = 0;
  let slideOffsetCarousel = 0;

  carousel = document.querySelector('.carousel__inner');
  let carouselLength = carousel.children.length;

  buttons = document.querySelectorAll('.carousel__arrow');
  for (button of buttons) {
    button.addEventListener('click', function() {
      slide = document.querySelector('.carousel__slide');
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
  buttons = document.querySelectorAll('.carousel__arrow');
  
  for (button of buttons) {
    let classButton = button.classList[1];
    button.style.display = '';

    if ((countCarousel == 0 && classButton== 'carousel__arrow_left')
      || (Math.abs(countCarousel) == carouselLength - 1
        && classButton == 'carousel__arrow_right')) {
      button.style.display = 'none';
    }
  }
}

