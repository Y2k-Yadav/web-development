const API_KEY = "0cee6a802eb31e2ffd431e2209b4312a";

// --- Element references ---
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("location-input");
const currentLocationBtn = document.getElementById("current-location-btn");
const weatherCard = document.getElementsByClassName("weather-card")[0];

// --- Reset button (created once, reused) ---
const resetBtn = document.createElement("button");
resetBtn.setAttribute("id", "rst");
resetBtn.textContent = "Reset";

// --- Validate API response, show error UI or render data ---
function checkValidResponse(result) {
  if (result.cod === "404") {
    showError("City not found");
    return;
  }
  if (result.cod === "400") {
    showError("Please enter a city name");
    return;
  }
  console.log(result);
  displayData(result);
}

function showError(message) {
  weatherCard.innerHTML = `<h1>${message}</h1>`;
  weatherCard.append(resetBtn);
}

// --- Fetch by city name ---
async function fetchWeatherByCity(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const result = await res.json();
    checkValidResponse(result);
  } catch (err) {
    showError("Something went wrong. Try again.");
    console.error(err);
  }
}

// --- Fetch by coordinates ---
async function fetchWeatherByCoords(lat, lon) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    const result = await res.json();
    checkValidResponse(result);
  } catch (err) {
    showError("Something went wrong. Try again.");
    console.error(err);
  }
}

// --- Render weather data into the card ---
function displayData(result) {
  console.log(result);

  document.getElementById("degree").innerText = result.main.temp + "°C";
  document.getElementById("city").innerText = result.name;

  const iconCode = result.weather[0].icon;
  document.getElementsByClassName("weather-img")[0].src =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  console.log(document.getElementsByClassName("weather-img")[0].src);

  document.getElementsByClassName("desc")[0].innerText =
    result.weather[0].description;

  document.getElementById("windvalue").innerText = result.wind.speed + " km/h";

  document.getElementsByClassName("pressurevalue")[0].innerText =
    result.main.pressure;

  document.getElementsByClassName("humidityvalue")[0].innerText =
    result.main.humidity + "%";
}

// --- Reset card back to default placeholder state ---
function resetCard() {
  weatherCard.innerHTML = `
    <div class="temperature">
      <h1 id="degree">23°C</h1>
    </div>
    <div class="city-name">
      <h2 id="city">Raichur</h2>
    </div>
    <div class="imgdetail">
      <img class="weather-img" src="./favicon.png" alt="icon" />
      <p class="desc">overcast clouds</p>
    </div>
    <div class="weather-details">
      <div class="wind" style="align-items: center">
        <p>Wind</p>
        <p id="windvalue">15 km/h</p>
      </div>
      <div class="pressure" style="align-items: center">
        <p>Pressure</p>
        <p class="pressurevalue">5454</p>
      </div>
      <div class="humidity" style="align-items: center">
        <p>Humidity</p>
        <p class="humidityvalue">50%</p>
      </div>
    </div>
  `;
  cityInput.value = "";
}

// --- Search flow ---
function handleSearch() {
  const trimmedCity = cityInput.value.trim();
  if (trimmedCity !== "") {
    fetchWeatherByCity(trimmedCity);
  }
}

searchBtn.addEventListener("click", handleSearch);

cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

resetBtn.addEventListener("click", resetCard);

// --- Current location flow ---
currentLocationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      fetchWeatherByCoords(latitude, longitude);
    },
    (error) => {
      alert(
        "Unable to get your location. Please allow location access or search manually.",
      );
      console.error(error);
    },
  );
});
