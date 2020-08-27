import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = this.render(steps, value);
  }

  render(steps, value) {
    let divSlider = createElement('<div class="slider"></div>');
    divSlider.addEventListener('click', () => {
      this.valueSlider = this.getValueSlider(event, steps);
      this.setValueSlider(this.valueSlider, steps);
    });

    let innerHtml = '<div class="slider__thumb" style="left: 0%;">';
    innerHtml += '<span class="slider__value">0</span>';
    innerHtml += '</div>';
    let divSliderThumb = createElement(innerHtml);
    divSliderThumb.addEventListener('pointerdown', () => {
      document.onpointermove = () => {
        this.sliderPointer(event, steps);
      };
      document.onpointerup = () => {
        this.valueSlider = this.sliderPointer(event, steps);
        this.setValueSlider(this.valueSlider, steps);
        document.onpointerup = null;
        document.onpointermove = null;
      };
    });
    divSlider.append(divSliderThumb); 

    let divSliderProgress = createElement('<div class="slider__progress" style="width: 0%;"></div>');
    divSlider.append(divSliderProgress);

    let divSliderSteps = createElement('<div class="slider__steps"></div>');

    for (let i = 0; i < steps; i++) {
      let span = createElement('<span></span>');
      if (i == value) {
        span.classList.add('slider__step-active');
      }
      divSliderSteps.append(span);
    }
    divSlider.append(divSliderSteps);

    return divSlider;
  }

  sliderPointer(event, steps) {
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let slider = document.querySelector('.slider');
    thumb.ondragstart = () => false;

    let domRectSlider = slider.getBoundingClientRect();
    let widthSlider = domRectSlider.width;
    let leftSlider = domRectSlider.left;
    let coordsPointerX = event.pageX - leftSlider;
    let widthStep = widthSlider / (steps - 1);
    let leftPercents = Math.round(coordsPointerX / (widthSlider / 100));
    let valueSlider = Math.round(coordsPointerX / widthStep);

    if (event.pageX > domRectSlider.right) {
      leftPercents = 100;
      valueSlider = steps - 1;
    }

    if (event.pageX < domRectSlider.left) {
      leftPercents = 100;
      valueSlider = 0;
    }

    if (event.type == 'pointermove') {
      this.elem.classList.add('slider_dragging');
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
    } else {
      this.elem.classList.remove('slider_dragging');
      let eventPointerChange = new CustomEvent('slider-change', {
        detail: valueSlider,
        bubbles: true
      })
      document.onpointerup = null;
      document.onpointermove = null;
      this.elem.dispatchEvent(eventPointerChange);

      return valueSlider;
    }
  }

  getValueSlider(event, steps) {
    let slider = document.querySelector('.slider');
    if (event.currentTarget == slider) {
      let domRectSlider = slider.getBoundingClientRect();
      let widthSlider = domRectSlider.width;
      let leftSlider = domRectSlider.left;
      let widthStep = widthSlider / (steps - 1);
      let coordsClickX = event.pageX - leftSlider;
      let valueSlider = Math.round(coordsClickX / widthStep);

      return valueSlider;
    }
  }

  setValueSlider(valueSlider, steps) {
    let divSliderValue = document.querySelector('.slider__value');
    divSliderValue.innerText = valueSlider;

    let ActiveStep = document.querySelector('.slider__step-active');
    
    ActiveStep.classList.remove('slider__step-active');

    let nodeSliderSteps = document.querySelector('.slider__steps');
    let span = nodeSliderSteps.childNodes[valueSlider];
    span.classList.add('slider__step-active');

    let thumb = document.querySelector('.slider__thumb');
    let progress = document.querySelector('.slider__progress');

    let leftPercents = valueSlider * (100 / (steps - 1));

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;

    let eventSliderChange = new CustomEvent('slider-change', {
      detail: valueSlider,
      bubbles: true
    })

    this.elem.dispatchEvent(eventSliderChange);
  }
}
