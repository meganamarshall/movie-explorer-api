const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_MOVIE_URL = `${BASE_URL}/search/movie`;
const MOVIE_DETAIL_URL = `${BASE_URL}/movie`;
const API_KEY = 'cb74bb60617505504abd12bd45490b45';

function setDefaultQueryParams(url) {
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-US');
}

export function makeSearchMovieUrl(queryOptions) {
    const searchInput = queryOptions.searchInput;
    const yearInput = queryOptions.year;
    if(!searchInput) {
        return '';
    }
    const url = new URL(SEARCH_MOVIE_URL);
    setDefaultQueryParams(url);
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', searchInput);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('year', yearInput);
    return url.toString();
}

export function makeMovieDetailUrl(movieId) {
    const path = `${MOVIE_DETAIL_URL}/${movieId}`;
    const url = new URL(path);
    setDefaultQueryParams(url);
    return url.toString();
}
