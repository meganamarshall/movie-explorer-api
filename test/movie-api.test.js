import { makeSearchMovieUrl, makeMovieDetailUrl } from '../src/movie-api.js';
const test = QUnit.test;

QUnit.module('making url based on search');

test('search movie url includes search input and page', assert => {
    //arrange
    const queryOptions = {
        searchInput: 'batman',
        page: 1,
        year: null
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=cb74bb60617505504abd12bd45490b45&language=en-US&include_adult=false&query=batman&page=1&year=null';
    //act
    const url = makeSearchMovieUrl(queryOptions);
    //assert
    assert.equal(url, expected);
});

test('search movie returns empty url if no search input is provided', assert => {
    //arrange
    const queryOptions = {
        searchInput: '',
        page: 1,
        year: null
    };

    //act
    const url = makeSearchMovieUrl(queryOptions);
    const expected = '';

    //assert
    assert.equal(url, expected);
});

test('movie detail uses movie id', assert => {
    const expected = 'https://api.themoviedb.org/3/movie/78?api_key=cb74bb60617505504abd12bd45490b45&language=en-US';

    const movieId = 78;

    const url = makeMovieDetailUrl(movieId);

    assert.equal(url, expected);
})