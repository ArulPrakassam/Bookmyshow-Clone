//buttons
class ButtonFetch {
  constructor(btn1, btn2) {
    this.btnLeft = document.querySelector(`${btn1}`);
    this.btnRight = document.querySelector(`${btn2}`);
  }
  moveLeft(slideShow) {
    this.btnLeft.addEventListener("click", () => {
      slideShow.scrollLeft -= 150;
    });
  }
  moveRight(slideShow) {
    this.btnRight.addEventListener("click", () => {
      slideShow.scrollLeft += 150;
    });
  }
}

const moviesSlideButtons = new ButtonFetch(
  ".movies-slide-btn1",
  ".movies-slide-btn2"
);
const liveEventsSlideButtons = new ButtonFetch(
  ".live-events-btn1",
  ".live-events-btn2"
);

const premiereSlideButtons = new ButtonFetch(
  ".premiere-slide-btn1",
  ".premiere-slide-btn2"
);

const onlineStreamingEventsSlideButtons = new ButtonFetch(
  ".online-streaming-slide-btn1",
  ".online-streaming-slide-btn2"
);

const outdoorEventsSlideButtons = new ButtonFetch(
  ".outdoor-events-slide-btn1",
  ".outdoor-events-slide-btn2"
);

const laughterTherapySlideButtons = new ButtonFetch(
  ".laughter-therapy-slide-btn1",
  ".laughter-therapy-slide-btn2"
);

const popularEventsSlideButtons = new ButtonFetch(
  ".popular-events-slide-btn1",
  ".popular-events-slide-btn2"
);

const gamesSportsSlideButtons = new ButtonFetch(
  ".games-sport-events-slide-btn1",
  ".games-sport-events-slide-btn2"
);

const funActivitiesSlideButtons = new ButtonFetch(
  ".fun-activities-slide-btn1",
  ".fun-activities-slide-btn2"
);

moviesSlideButtons.moveLeft(document.querySelector(".movies-list"));
moviesSlideButtons.moveRight(document.querySelector(".movies-list"));

liveEventsSlideButtons.moveLeft(document.querySelector(".live-events"));
liveEventsSlideButtons.moveRight(document.querySelector(".live-events"));

premiereSlideButtons.moveLeft(document.querySelector(".premiere-list"));
premiereSlideButtons.moveRight(document.querySelector(".premiere-list"));

onlineStreamingEventsSlideButtons.moveLeft(
  document.querySelector(".online-streaming-list")
);

onlineStreamingEventsSlideButtons.moveRight(
  document.querySelector(".online-streaming-list")
);

outdoorEventsSlideButtons.moveLeft(
  document.querySelector(".outdoor-events-list")
);

outdoorEventsSlideButtons.moveRight(
  document.querySelector(".outdoor-events-list")
);

laughterTherapySlideButtons.moveLeft(
  document.querySelector(".laughter-therapy-list")
);
laughterTherapySlideButtons.moveRight(
  document.querySelector(".laughter-therapy-list")
);

popularEventsSlideButtons.moveLeft(
  document.querySelector(".popular-events-list")
);
popularEventsSlideButtons.moveRight(
  document.querySelector(".popular-events-list")
);

gamesSportsSlideButtons.moveLeft(
  document.querySelector(".games-sport-events-list")
);
gamesSportsSlideButtons.moveRight(
  document.querySelector(".games-sport-events-list")
);

funActivitiesSlideButtons.moveLeft(
  document.querySelector(".fun-activities-list")
);
funActivitiesSlideButtons.moveRight(
  document.querySelector(".fun-activities-list")
);

//fetching content
class FetchContents {
  constructor(api) {
    this.api = api;
  }
  //movie slide content
  async movieSlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { title, ratings, img, genre } = item;
        return `<a class="container" href="">
                <div class="img-container">
                <picture>
                    <img class="poster movie-poster" src="${img}" alt="${title}"
                    loading="eager" />
                </picture>
                <h3 class="star-rating">
                    <span>
                    <i class="fa-solid fa-star"></i>
                    </span>
                    ${ratings}
                </h3>
                </div>
                <div class="poster-title-container">
                <h1 class="poster-title">${title}</h1>
                <h2 class="description">${genre}</h2>
                </div>
            </a>`;
      });

      //grid template columns if there are more than 10 items
      if (items.length > 10) {
        document.querySelector(
          ".movies-list"
        ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
      }
      document.querySelector(".movies-list").innerHTML = items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }

  //live event slide content
  async liveEventsSlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { img, alt } = item;
        return `
    
      <a href="" class="live-events-img-container">
        <picture>
          <img
            src="${img}"
            class="live-events-img"
            alt="${alt}"
            loading="lazy"
          />
          </picture>
        </a>`;
      });

      document.querySelector(".live-events").innerHTML = items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }
  //premiere slide contents
  async premiereSlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { img, language, title } = item;
        return `
    
     <a class="container" href="">
          <div class="img-container">
            <picture>
              <img
                class="poster premiere-poster"
                src="${img}"
                alt="${title}"
                 loading="lazy"
            /></picture>
          </div>
          <div class="poster-title-container">
            <h1 class="poster-title premiere-movie-title">${title}</h1>
            <h2 class="description premiere-description">${language}</h2>
          </div>
        </a>`;
      });

      //grid template columns if there are more than 10 items
      if (items.length > 10) {
        document.querySelector(
          ".premiere-list"
        ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
      }
      document.querySelector(".premiere-list").innerHTML = items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }

  //online streaming events content
  async streamingSlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { img, platform, title } = item;
        return `
    
     <a class="container" href="">
          <div class="img-container">
            <picture>
              <img
                 class="poster border-radius-poster"
                src="${img}"
                alt="${title}"
                 loading="lazy"
            /></picture>
          </div>
          <div class="poster-title-container">
            <h1 class="poster-title">${title}</h1>
            <h2 class="description">${platform}</h2>
          </div>
        </a>`;
      });

      //grid template columns if there are more than 10 items
      if (items.length > 10) {
        document.querySelector(
          ".online-streaming-list"
        ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
      }
      document.querySelector(".online-streaming-list").innerHTML =
        items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }

  //for outdoor events content

  async outdoorEventsSlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { img, location, title } = item;
        return `
    
     <a class="container" href="">
          <div class="img-container">
            <picture>
              <img
                 class="poster border-radius-poster"
                src="${img}"
                alt="${title}"
                 loading="lazy"
            /></picture>
          </div>
          <div class="poster-title-container">
            <h1 class="poster-title">${title}</h1>
            <h2 class="description">${location}</h2>
          </div>
        </a>`;
      });

      //grid template columns if there are more than 10 items
      if (items.length > 10) {
        document.querySelector(
          ".outdoor-events-list"
        ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
      }
      document.querySelector(".outdoor-events-list").innerHTML =
        items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }

  //laughter therapy content

  async laughterTherapySlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { img, platform, title } = item;
        return `
    
     <a class="container" href="">
          <div class="img-container">
            <picture>
              <img
                 class="poster border-radius-poster"
                src="${img}"
                alt="${title}"
                 loading="lazy"
            /></picture>
          </div>
          <div class="poster-title-container">
            <h1 class="poster-title">${title}</h1>
            <h2 class="description">${platform}</h2>
          </div>
        </a>`;
      });

      //grid template columns if there are more than 10 items
      if (items.length > 10) {
        document.querySelector(
          ".laughter-therapy-list"
        ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
      }
      document.querySelector(".laughter-therapy-list").innerHTML =
        items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }

  //for popular events content

  async popularEventsSlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { img, platform, title } = item;
        return `
    
     <a class="container" href="">
          <div class="img-container">
            <picture>
              <img
                 class="poster border-radius-poster"
                src="${img}"
                alt="${title}"
                 loading="lazy"
            /></picture>
          </div>
          <div class="poster-title-container">
            <h1 class="poster-title">${title}</h1>
            <h2 class="description">${platform}</h2>
          </div>
        </a>`;
      });

      //grid template columns if there are more than 10 items
      if (items.length > 10) {
        document.querySelector(
          ".popular-events-list"
        ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
      }
      document.querySelector(".popular-events-list").innerHTML =
        items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }

  //games and sports content

  async gamesSportsSlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { img, platform, title } = item;
        return `
    
     <a class="container" href="">
          <div class="img-container">
            <picture>
              <img
                 class="poster border-radius-poster"
                src="${img}"
                alt="${title}"
                 loading="lazy"
            /></picture>
          </div>
          <div class="poster-title-container">
            <h1 class="poster-title">${title}</h1>
            <h2 class="description">${platform}</h2>
          </div>
        </a>`;
      });

      //grid template columns if there are more than 10 items
      if (items.length > 10) {
        document.querySelector(
          ".games-sport-events-list"
        ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
      }
      document.querySelector(".games-sport-events-list").innerHTML =
        items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }

  //fun activities content

  async funActivitesSlideContent() {
    try {
      const response = await fetch(this.api);
      const data = await response.json();
      const items = data.map((item) => {
        const { img, platform, title } = item;
        return `
    
     <a class="container" href="">
          <div class="img-container">
            <picture>
              <img
                 class="poster border-radius-poster"
                src="${img}"
                alt="${title}"
                 loading="lazy"
            /></picture>
          </div>
          <div class="poster-title-container">
            <h1 class="poster-title">${title}</h1>
            <h2 class="description">${platform}</h2>
          </div>
        </a>`;
      });

      //grid template columns if there are more than 10 items
      if (items.length > 10) {
        document.querySelector(
          ".fun-activities-list"
        ).style.gridTemplateColumns = `repeat(${items.length},1fr)`;
      }
      document.querySelector(".fun-activities-list").innerHTML =
        items.join(" ");
    } catch (error) {
      console.log(new Error());
    }
  }
}

const moviesFetch = new FetchContents("../API/movies-api.json");
const liveEventsFetch = new FetchContents("../API/live-events-api.json");
const premiereFetch = new FetchContents("../API/premiere-api.json");
const streamingFetch = new FetchContents(
  "../API/online-streaming-events-api.json"
);
const outdoorEventsFetch = new FetchContents("../API/outdoor-events-api.json");
const laughterTherapyFetch = new FetchContents(
  "../API/laughter-therapy-api.json"
);
const popularEventsFetch = new FetchContents("../API/popular-events-api.json");
const gamesSportsEventsFetch = new FetchContents(
  "../API/games-sports-events-api.json"
);
const funActivitesFetch = new FetchContents("../API/fun-activities-api.json");

moviesFetch.movieSlideContent();
liveEventsFetch.liveEventsSlideContent();
premiereFetch.premiereSlideContent();
streamingFetch.streamingSlideContent();
outdoorEventsFetch.outdoorEventsSlideContent();
laughterTherapyFetch.laughterTherapySlideContent();
popularEventsFetch.popularEventsSlideContent();
gamesSportsEventsFetch.gamesSportsSlideContent();
funActivitesFetch.funActivitesSlideContent();
