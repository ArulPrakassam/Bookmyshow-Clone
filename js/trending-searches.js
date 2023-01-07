//trending search dynamic content

const trendingSearches = [
  {
    title: "Avatar: The Way of Water",
    type: "Movies",
    link: "#",
  },
  {
    title: "Avatar (3D)",
    type: "Movies",
    link: "#",
  },
  {
    title: "Varisu",
    type: "Movies",
    link: "#",
  },
  {
    title: "Connect",
    type: "Movies",
    link: "#",
  },
  {
    title: "Blacksheep's Yuvan Live in Concert - Coimbatore",
    type: "Events",
    link: "#",
  },
  {
    title: "Laththi",
    type: "Movies",
    link: "#",
  },
  {
    title: "Naai Sekar Returns",
    type: "Movies",
    link: "#",
  },
  {
    title: "Love Today",
    type: "Movies",
    link: "#",
  },
  {
    title: "Gatta Kusthi",
    type: "Movies",
    link: "#",
  },
  {
    title: "Blacksheep's Yuvan Live in Concert - Trichy",
    type: "Events",
    link: "#",
  },
];
export default ((items) => {
  const trendingItems = items.map(({ title, type, link }) => {
    return `<a href="${link}" class="trending-search-container">
          <h2>${title}</h2>
          <h3>${type}</h3>
        </a>`;
  });
  document.querySelector(".trending-search-main-container").innerHTML =
    trendingItems.join(" ");
})(trendingSearches);
