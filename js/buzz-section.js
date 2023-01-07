const buzzMainContainer = document.querySelector(".buzz-main-container");
const url = "../API/buzz-section-api.json";
const fetchBuzzContent = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const items = data.map(({ img, alt, description }) => {
      return ` <a href="#" class="buzz-single-item"
          ><div class="buzz-container">
            <img src="${img}" alt="${alt}" loading="lazy"/>
            <p>${description}</p>
          </div></a
        >`;
    });
    buzzMainContainer.innerHTML = items.join(" ");
  } catch (error) {
    console.log(error);
  }
};
fetchBuzzContent();
