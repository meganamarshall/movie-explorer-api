import { makeMoviesList } from '../src/list-component.js';
const test = QUnit.test;

QUnit.module('make movie template');

test('generate movie list item', assert => {
    //arrange
    const movie = {
        title: 'Solo: A Star Wars Story',
        poster_path: '/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg',
        release_date: '2018-05-15'
    };
    const expected = /*html*/
        `<li class="movie-card">
            <h2>Solo: A Star Wars Story</h2>
            <span id="hover-text">Click for Details</span>
            <img class="poster" src="https://image.tmdb.org/t/p/w92/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg">
            <p>Release Year: 2018</p>
        </li>`;
    //act
    const result = makeMoviesList(movie);
    //assert
    assert.htmlEqual(result, expected);
});