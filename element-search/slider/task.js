/* Рабочий вариант сдать

let slideCurrent = 0;
const slides = document.querySelectorAll(".slider__item");
const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
// const dots = document.getElementsByClassName(".slider__dot");

//function changeSlide() {
  arrowNext.onclick = () => {
    slideCurrent++;
    for (let slide of Array.from(slides)) {
      slide.className = "slider__item";
    }
    if (slideCurrent >= slides.length) {
      slideCurrent = 0;
    }
    slides[slideCurrent].className = "slider__item slider__item_active";
  };

  arrowPrev.onclick = () => {
    slideCurrent--;
    for (let slide of Array.from(slides)) {
      slide.className = "slider__item";
    }
    if (slideCurrent < 0) {
      slideCurrent = slides.length - 1;
    }
    slides[slideCurrent].className = "slider__item slider__item_active";
  }; */

const sliderItems = document.getElementsByClassName('slider__item');
const sliderDots = document.getElementsByClassName('slider__dot');
const sliderDotsArray = Array.from(sliderDots);
const leftBtn = document.querySelector('.slider__arrow_prev');
const rightBtn = document.querySelector('.slider__arrow_next');

let slideIndex = 1;

const changeSlide = (i) => {
  if (i > sliderItems.length) {
    slideIndex = 1;
  }
  if (i < 1) {
    slideIndex = sliderItems.length;
  }
  for (let slide of sliderItems) {
    for (let dot of sliderDots) {
      if (sliderItems[slide] === sliderDots[dot]) {
        slide.classList.remove('slider__item_active');
        dot.classList.remove('slider__dot_active');
      }
    }
  }
  sliderItems[slideIndex - 1].classList.add('slider__item_active');
  sliderDots[slideIndex - 1].classList.add('slider__dot_active');
};
changeSlide(slideIndex);


sliderDotsArray.forEach((item, j) => {
  item.addEventListener('click', () => {
    slideIndex = j+1;
    changeSlide(slideIndex);
  });
});


const clickLeft = () => {
  changeSlide(slideIndex -= 1);
}

const clickRight = () => {
  changeSlide(slideIndex += 1);
}

leftBtn.addEventListener('click', clickLeft);
rightBtn.addEventListener('click', clickRight);







const slides = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

let slideNum = 0;

next.onclick = function () {
    slideNum++;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (slideNum >= slides.length) {
        slideNum = 0;
    }
    slides[slideNum].className = 'slider__item slider__item_active';
};

prev.onclick = function () {
    slideNum--;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (slideNum < 0) {
        slideNum = slides.length - 1;
    }
    slides[slideNum].className = 'slider__item slider__item_active';
};
