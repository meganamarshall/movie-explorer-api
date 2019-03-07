import { writeSearchToQuery } from './query-component.js';

const movieSearchForm = document.getElementById('search-form');

movieSearchForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(movieSearchForm);
    const searchInput = formData.get('movie');
    const existingQuery = window.location.hash.slice(1);

    const newQuery = writeSearchToQuery(existingQuery, searchInput);

    window.location.hash = newQuery;

});

export function updateSearchInput(searchInput) {
    searchInput.value = searchInput;
}