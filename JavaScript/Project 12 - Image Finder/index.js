const ACCESS_TOKEN = "KdidCYxoE6ghPfCsSYbNS1n-sndY66tCSfzmsnTIjVE";
let searchInput = document.getElementById("input");
let apiResponse = "";
let cardsHTML = "";
let currentPage = 1;

let loadMoreBtn = document.createElement("button");
loadMoreBtn.setAttribute("id", "load");
loadMoreBtn.textContent = "Load More";

searchInput.addEventListener("focus", () => {
  searchInput.placeholder = "";
});

searchInput.addEventListener("blur", () => {
  searchInput.placeholder = "search image here...";
});

async function fetchImages(searchTerm, pageNumber) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${pageNumber}&client_id=${ACCESS_TOKEN}`,
  );
  apiResponse = await response.json();
  return apiResponse;
}

async function handleSearch() {
  currentPage = 1;
  cardsHTML = "";
  if (searchInput.value !== "") {
    apiResponse = await fetchImages(searchInput.value.trim(), currentPage);
    renderCards(apiResponse);
  }
}

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

document
  .getElementsByClassName("btn")[0]
  .addEventListener("click", handleSearch);

function renderCards(apiResponse) {
  console.log(apiResponse);
  cardsHTML += apiResponse.results
    .map((photo) => {
      return `
            <div class="card">
                <div class="user">
                    <img class="user_img" src="${photo.user.profile_image.medium}">
                    <p class="username">${photo.user.name}</p>
                </div>
                <div class="search">
                    <img class="searched_img" src="${photo.urls.regular}" data-link="${photo.links.html}">
                    <p class="item-name">${photo.alt_description}</p>
                </div>
            </div>
        `;
    })
    .join("");

  document.getElementById("seconddiv").innerHTML = cardsHTML;
  document.getElementById("maindiv").append(loadMoreBtn);
}

loadMoreBtn.addEventListener("click", async () => {
  currentPage += 1;
  apiResponse = await fetchImages(searchInput.value.trim(), currentPage);
  renderCards(apiResponse);
});

document.getElementById("seconddiv").addEventListener("click", (e) => {
  if (e.target.classList.contains("searched_img")) {
    let originalUrl = e.target.dataset.link;
    if (originalUrl) {
      window.open(originalUrl, "_blank");
    }
  }
});