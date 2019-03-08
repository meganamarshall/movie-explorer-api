const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'cb74bb60617505504abd12bd45490b45';

export function makeSearchMovieUrl(queryOptions) {
    const searchInput = queryOptions.searchInput;
    const yearInput = queryOptions.year;
    if(!searchInput) {
        return '';
    }
    const url = new URL(SEARCH_MOVIE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', searchInput);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('year', yearInput);
    return url.toString();
}