const slider = document.querySelector(".slider");
const slides = slider.querySelector(".slides");
const slideImages = slider.querySelectorAll(".slides img");
const prevBtn = slider.querySelector(".prev");
const nextBtn = slider.querySelector(".next");

let currentSlide = 0;
const slideCount = slideImages.length;
const slideWidth = slideImages[0].clientWidth;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
  currentSlide = index;
  updateButtons();
}

function slideNext() {
  if (currentSlide === slideCount - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentSlide + 1);
  }
}

function slidePrev() {
  if (currentSlide === 0) {
    goToSlide(slideCount - 1);
  } else {
    goToSlide(currentSlide - 1);
  }
}

function updateButtons() {
  if (currentSlide === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
  
  if (currentSlide === slideCount - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

updateButtons();
prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);
