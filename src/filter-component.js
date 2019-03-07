import { writeYearToQuery } from './query-component.js';

const filterForm = document.getElementById('filter-form');
const yearInput = document.getElementById('year-filter');

filterForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(filterForm);
    const yearInput = formData.get('year-filter');
    const existingQuery = window.location.hash.slice(1);

    const newQuery = writeYearToQuery(existingQuery, yearInput);

    window.location.hash = newQuery;

});

export function updateYearInput(inputtedYear) {
    yearInput.value = inputtedYear;
}