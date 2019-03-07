import movies from '../data/movies.js';
import loadMovies from './list-component.js';
import readFromQuery from './query-component.js';
import { updateSearchInput } from '../src/search-component.js';
import makeSearchMovieUrl from '../src/make-search-movie-url.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    
    updateSearchInput(queryOptions.searchInput);
    const url = makeSearchMovieUrl(queryOptions);
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            console.log(movies);
            loadMovies(movies.results);
        })
        .catch(err => {
            /* eslint-disable-next-line */
            console.error('Fetch error:', err);
        });
});

