import { updateMovies } from './list-component.js';
import { readFromQuery } from './query-component.js';
import { updateSearchInput } from '../src/search-component.js';
import { updateYearInput } from './filter-component.js';
import { makeSearchMovieUrl } from './movie-api.js';
import { updatePagingInfo } from './paging-component.js';
import loadMovies from './list-component.js';
import loadMovieDetail from './movie-detail-component.js';
const prompt = document.getElementById('prompt');
const moviesSection = document.getElementById('movies-section');

loadMovies(movie => {
    loadMovieDetail(movie);
})

window.addEventListener('hashchange', loadQuery);

loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    
    updateSearchInput(queryOptions.searchInput);
    updateYearInput(queryOptions.year);
    const url = makeSearchMovieUrl(queryOptions);

    if(!url) {
        prompt.classList.remove('hidden');
        moviesSection.classList.add('hidden');
        return;
    }
    else {
        prompt.classList.add('hidden');
        moviesSection.classList.remove('hidden');
    }

    fetch(url)
        .then(response => response.json())
        .then(movies => {
            updateMovies(movies.results);
            const pagingInfo = {
                page: movies.page,
                totalPages: movies.total_pages
            };
            updatePagingInfo(pagingInfo);
        })
        .catch(err => {
            /* eslint-disable-next-line */
            console.error('Fetch error:', err);
        });
}
