// VARIABLES

const container = document.querySelector(".slider__container");
const rightSide = document.querySelector(".slider__right--side");
const leftSide = document.querySelector(".slider__left--side");
const upBtn = document.querySelector(".up__button");
const downBtn = document.querySelector(".down__button");
const slideLength = rightSide.querySelectorAll("img").length;

let sliderIndex = 1;

// LOADING FIRST TIME

leftSide.style.top = `-${(slideLength - 1) * 100}vh`;

// EVENT LISTENERS

upBtn.addEventListener("click", () => nextSlide("up"));
downBtn.addEventListener("click", () => nextSlide("down"));

// MAIN FUNCTION

const nextSlide = (direction) => {
  const sliderHeight = container.clientHeight;
  if (direction === "up") {
    sliderIndex++;
    if (sliderIndex > slideLength - 1) {
      sliderIndex = 2;
    }
  } else if (direction === "down") {
    sliderIndex--;
    if (sliderIndex < 2) {
      sliderIndex = slideLength - 1;
    }
  }
  rightSide.style.transform = `translateY(-${sliderIndex * sliderHeight}px)`;
  leftSide.style.transform = `translateY(${sliderIndex * sliderHeight}px)`;
};
