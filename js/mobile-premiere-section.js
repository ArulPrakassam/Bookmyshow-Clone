const mobilePremiereContainer = document.querySelector(
  ".head-premiere-mobile-container"
);
const url = "../API/premiere-api.json";
const interval = 4000;
var slideWidth;
var slideInterval;
var index = -1;
const fetchPremiereMobileContent = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const items = data.map(
      ({ img, title, language, genre, description, id }) => {
        return ` <a href="#" class="premiere-movie-item" data-id="${id}">
          <div class="premiere-mobile-movie">
              <img
                src="${img}"
                alt="${title}"/>

            <div class="movie-mobile-details">
              <h1>${title}</h1>
              <p>${genre}</p>
              <p>${language}</p>
              <p>
               ${description}
              </p>
            </div>
          </div>
          <div class="purchase-premiere-movie">
            <button class="purchase-premiere-movie-btn">Buy or Rent</button>
          </div>
        </a>`;
      }
    );
    //grid template columns if there are more than 10 items
    if (items.length > 10) {
      document.querySelector(
        ".head-premiere-mobile-container"
      ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
    }
    let line = " ";
    for (let i = 1; i <= items.length; i++) {
      line = line + `<span class="line" data-id="${i}"></span> `;
    }
    document.querySelector(".lines").innerHTML = line;
    mobilePremiereContainer.innerHTML = items.join(" ");
    start();
  } catch (error) {
    console.log(error);
  }
};

fetchPremiereMobileContent();

const mobilePremiereRun = (items, lines, slideWidth) => {
  if (index > items.length - 1) {
    clearInterval(slideInterval);
    index = -1;
    start();
  }
  index++;
  lineColorChange(items, lines, index);
  mobilePremiereContainer.scrollLeft = slideWidth * index;
};

//selecting the slide items
const selectSlides = () => [
  ...document.querySelectorAll(".premiere-movie-item"),
];

//selecting the line items
const selectLines = () => [...document.querySelectorAll(".line")];

const start = () => {
  const items = selectSlides();
  const lines = selectLines();

  // line click events
  lines.forEach((line) => {
    line.addEventListener("click", () => {
      let id = line.dataset.id;
      items.forEach((i) => {
        if (id === i.dataset.id) {
          i.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "start",
          });
          index = id - 2;
          // stop the interval when the line is click
          clearInterval(slideInterval);
          // again starting the interval from where it is stopped
          slideInterval = setInterval(() => {
            mobilePremiereRun(items, lines, slideWidth);
          }, interval);
        }
      });
    });
  });

  slideWidth = items[0].clientWidth;
  slideInterval = setInterval(() => {
    // finding width of the slide when we resize it
    window.addEventListener("resize", widthSlide(items));
    mobilePremiereRun(items, lines, slideWidth);
  }, interval);
  // removing the window eventlistener
  setInterval(() => {
    window.removeEventListener("resize", widthSlide(items));
  }, interval);
};

// changing the line color
const lineColorChange = (items, lines, index) => {
  if (index > items.length - 1) return;
  lines.forEach((li) => {
    let lineId = li.dataset.id - 1;
    if (lineId === index) {
      lines[lineId].style.backgroundPosition = "bottom left";
    } else {
      lines[lineId].style.backgroundPosition = "bottom right";
    }
  });
};

// finding width of the slide when we resize it
const widthSlide = (items) => {
  slideWidth = items[0].clientWidth;
};
mobilePremiereContainer
  // if the user scroll the elements manually means then at that time the setInterval will stop and after the user stops scrolling the interval continued
  .addEventListener("scroll", () => {
    clearInterval(slideInterval);
    start();
  });
