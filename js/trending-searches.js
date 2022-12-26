//trending search dynamic content

const trendingSearches = [
  {
    title: "Avatar: The Way of Water",
    type: "Movies",
  },
  {
    title: "Avatar (3D)",
    type: "Movies",
  },
  {
    title: "Varisu",
    type: "Movies",
  },
  {
    title: "Connect",
    type: "Movies",
  },
  {
    title: "Blacksheep's Yuvan Live in Concert - Coimbatore",
    type: "Events",
  },
  {
    title: "Laththi",
    type: "Movies",
  },
  {
    title: "Naai Sekar Returns",
    type: "Movies",
  },
  {
    title: "Love Today",
    type: "Movies",
  },
  {
    title: "Gatta Kusthi",
    type: "Movies",
  },
  {
    title: "Blacksheep's Yuvan Live in Concert - Trichy",
    type: "Events",
  },
];
export default ((items) => {
  const trendingItems = items.map(({ title, type }) => {
    return `<a href="" class="trending-search-container">
          <h2>${title}</h2>
          <h3>${type}</h3>
        </a>`;
  });
  document.querySelector(".trending-search-main-container").innerHTML =
    trendingItems.join(" ");
})(trendingSearches);
