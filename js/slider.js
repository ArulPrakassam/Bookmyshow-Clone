const leftSlideBtn = document.querySelector(".left-click-slide");
const rightSlideBtn = document.querySelector(".right-click-slide");
const sliderSlides = [...document.querySelectorAll(".slider-slides")];
const dots = [...document.querySelectorAll(".dot")];
var slide = 1;
showSlide(slide);

leftSlideBtn.addEventListener("click", () => {
  slide = slide - 1;
  showSlide(slide);
});
rightSlideBtn.addEventListener("click", () => {
  slide = slide + 1;
  showSlide(slide);
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    let index = dots.indexOf(dot);
    slide = index + 1;
    dotColorChange(index);
    showSlide(slide);
  });
});
function showSlide(n) {
  if (n > sliderSlides.length) {
    slide = 1;
  }
  if (n < 1) {
    slide = sliderSlides.length;
  }
  for (let i = 0; i < sliderSlides.length; i++) {
    sliderSlides[i].style.display = "none";
  }
  sliderSlides[slide - 1].style.display = "block";
  dotColorChange(slide - 1);
}

function dotColorChange(index) {
  dots.forEach((item) => {
    if (dots.indexOf(item) === index) {
      item.style.color = "#F8F9FA";
    } else {
      item.style.color = "#CED4DA";
    }
  });
}

function automaticRun() {
  showSlide((slide = slide + 1));
}
setInterval(automaticRun, 3000);
