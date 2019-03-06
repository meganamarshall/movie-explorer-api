import { writeSearchToQuery } from './query-component.js';

const artistSearchForm = document.getElementById('artist-search');

artistSearchForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(artistSearchForm);
    const searchInput = formData.get('artist');
    const existingQuery = window.location.hash.slice(1);

    const newQuery = writeSearchToQuery(existingQuery, searchInput);

    window.location.hash = newQuery;

});

export function updateSearchInput(searchInput) {
    searchInput.value = searchInput;
}