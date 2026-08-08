## Variable & Function Reference — Image Finder Project

| Name           | Type              | Purpose                                                                                  |
| -------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| `searchInput`  | DOM element       | Reference to the search `<input>` box (`id="input"`)                                     |
| `apiResponse`  | Object            | Holds the raw JSON data returned from Unsplash after a fetch                             |
| `loadMoreBtn`  | DOM element       | The "Load More" button — created in JS, uses `id="load"` for CSS styling                 |
| `cardsHTML`    | String            | Accumulates all card HTML across searches/loads (uses `+=`, never resets)                |
| `currentPage`  | Number            | Tracks which Unsplash results page to fetch next (starts at 1, increases on "Load More") |
| `ACCESS_TOKEN` | String (constant) | Unsplash API key, used to authenticate every fetch request                               |

## Function Reference

| Function                              | Purpose                                                                                                                          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `fetchImages(searchTerm, pageNumber)` | Sends the actual fetch request to Unsplash's API for a given keyword + page number. Returns parsed JSON.                         |
| `handleSearch()`                      | Runs when user searches (Enter key or Search button click). Calls `fetchImages()` with page 1, then renders results.             |
| `renderCards(apiResponse)`            | Builds the HTML for each photo card and injects it into `#seconddiv`. Also appends the "Load More" button after rendering.       |
| `loadMoreBtn` click listener          | Increases `currentPage`, fetches the _next_ page of results, and appends new cards on top of existing ones (via `cardsHTML +=`). |

## Key behaviors to remember

- Cards accumulate (`+=`) instead of replacing — so "Load More" adds to what's already shown, doesn't wipe it.
- `currentPage` must increase _before_ being used in `fetchImages()` — using `countpage++` (post-increment) caused a bug where the old page number was sent instead of the new one. Use `++currentPage` or `currentPage += 1` first.
- `loadMoreBtn` is created once in JS (not written in HTML) — it's appended to `#maindiv` every time `renderCards()` runs, so it always ends up positioned after the current cards.
