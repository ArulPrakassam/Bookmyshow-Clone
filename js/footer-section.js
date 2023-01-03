// footer middle
const footerMiddle = document.querySelector(".footer-middle");
const url = "../API/footer-section-api.json";
const fetchFooterContent = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const content = data.map(({ heading, movies }) => {
      const moviesInfo = movies
        .map(({ title, link }, count) => {
          if (count === movies.length - 1) {
            return `<a href="${link}">${title}</a>`;
          } else {
            return `<a href="${link}">${title}</a> | `;
          }
        })
        .join(" ");
      return ` <div class="footer-middle-item-one">
          <h2>${heading}</h2>
          <p>
           ${moviesInfo}
          </p>
        </div>`;
    });
    footerMiddle.innerHTML = content.join(" ");
  } catch (error) {
    console.log(error);
  }
};
fetchFooterContent();
