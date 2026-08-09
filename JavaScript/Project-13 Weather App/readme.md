# Weather App (JavaScript + OpenWeatherMap API)

A simple weather app that lets a user search by city name or use their current location to get live weather data.

## Features

- Search weather by city name
- Search weather using current device location (geolocation)
- Handles invalid city names and empty input
- Reset button to restore the default card state
- Error handling for network failures and denied location permission

## Tech Used

- HTML/CSS
- Vanilla JavaScript (no framework)
- [OpenWeatherMap Current Weather API](https://openweathermap.org/current) (free tier, `data/2.5/weather` endpoint)
- Browser Geolocation API (`navigator.geolocation`)

## How It Works

### Search by city

1. User types a city name and clicks **Search** (or presses Enter).
2. `handleSearch()` trims the input and, if not empty, calls `fetchWeatherByCity(city)`.
3. The API is called with `q=${city}`.
4. `checkValidResponse(result)` checks the response:
   - `cod === "404"` → city not found
   - `cod === "400"` → empty/invalid query ("Nothing to geocode")
   - otherwise → `displayData(result)` renders the weather card

### Search by current location

1. User clicks the **current location** button.
2. `navigator.geolocation.getCurrentPosition(successCallback, errorCallback)` is called.
3. On success → `fetchWeatherByCoords(lat, lon)` calls the API with `lat=`/`lon=` instead of `q=`.
4. On error (permission denied, no GPS, etc.) → an `alert()` tells the user, and it logs the error object (`error.code`: 1 = permission denied, 2 = position unavailable, 3 = timeout).

### Reset

- `resetCard()` rebuilds the card's default placeholder HTML and clears the input field.

## Key Bugs Fixed (for future reference)

| Bug                                                               | Cause                                                                                                                            | Fix                                                                                                    |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Weather always in Kelvin                                          | Typo: `unit=matric`                                                                                                              | Correct params: `units=metric`                                                                         |
| `.add(rstbtn)` did nothing                                        | `.add()` is a `classList` method, not a DOM insertion method                                                                     | Use `.append()`, `.prepend()`, or `.insertBefore()`                                                    |
| Error check with `===` failed                                     | `cod` field type is inconsistent — sometimes string, sometimes number                                                            | Match actual type from a real API response, or use `==` after checking `typeof`                        |
| Wrong error code checked                                          | Checked `cod === "400"` but real 404 (city not found) uses `"404"`; `"400"` is for empty/invalid query ("Nothing to geocode")    | Handle both `404` and `400` separately with distinct messages                                          |
| `displayData()` ran even on invalid city                          | No `return` after the error-handling block                                                                                       | Add `return;` inside the `if` block                                                                    |
| Empty-input check always passed                                   | Checked `cityName != ""` where `cityName` was the DOM element, not its value                                                     | Check `cityName.value.trim() != ""`                                                                    |
| Whitespace-only input slipped through                             | Empty check ran on untrimmed value, fetch used trimmed value                                                                     | Trim the value _before_ the empty check                                                                |
| Nested duplicate `.weather-card` div                              | Injected a full `<div class="weather-card">...</div>` inside the element that already had that class                             | Only inject the _inner_ content, not the wrapper                                                       |
| `.style.width(20%)` threw an error                                | `.style.width` is a property, not a method; `20%` isn't valid JS syntax                                                          | `el.style.width = "20%"` (string, no parentheses)                                                      |
| Hover transition not smooth                                       | `transition` was placed inside `:hover` instead of the base selector                                                             | Move `transition` to the base (non-hover) rule                                                         |
| `transition: 0.5s ease-in, 0.5s ease-out` didn't work             | Comma-separated transitions need a property name per group                                                                       | Use `transition: all 0.5s ease-in-out;` or name each property explicitly                               |
| Current location showed wrong city (Bangalore instead of Raichur) | Browser fell back to IP-based location (accuracy ~50,000m) instead of real GPS — common on laptops/desktops without GPS hardware | Not code-fixable on desktop; added an error callback + alert so failures are visible instead of silent |

## Known Limitations

- On desktop/laptop devices without GPS hardware, "current location" may be inaccurate (IP-based estimate, often city-level or worse). This is a browser/hardware limitation, not a code bug.
- Free-tier OpenWeatherMap only supports the `data/2.5/weather` endpoint — the One Call API (3.0/4.0) requires a separate paid subscription and will return `401` if used.

## File Structure

```
index.html
style.css (or index.css)
index.js
```

## Deployment (GitHub Pages)

1. Create a public GitHub repo and push these files (`git init`, `git add .`, `git commit -m "initial commit"`, `git branch -M main`, `git remote add origin <repo-url>`, `git push -u origin main`).
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
4. Wait a minute for the build, then the live URL appears on that same Settings → Pages screen.
5. Site is live at: `https://Y2K-Yadav.github.io/<repo-name>/`

**Note:** the OpenWeatherMap API key is hardcoded in `index.js`, so it will be publicly visible in the repo and live site source once pushed. Fine for a free-tier learning project, but not something to do with sensitive keys.

## API Key

Currently hardcoded in `index.js` for development. For any public/deployed version, move the API key to an environment variable or backend proxy so it isn't exposed in client-side code.

---

Built by [Y2K-Yadav](https://github.com/Y2K-Yadav)
📷 [@yadav_dev_log](https://instagram.com/yadav_dev_log)
