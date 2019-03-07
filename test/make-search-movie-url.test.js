import makeSearchMovieUrl from '../src/make-search-movie-url.js';
const test = QUnit.test;

QUnit.module('making url based on search');

test('url includes query and page', assert => {
    //arrange
    const queryOptions = {
        searchInput: 'batman',
        page: 1
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=cb74bb60617505504abd12bd45490b45&language=en-us&include_adult=false&query=batman&page=1';
    //act
    const url = makeSearchMovieUrl(queryOptions);
    //assert
    assert.equal(url, expected);
});

test('returns empty url if no search input is provided', assert => {
    //arrange
    const queryOptions = {
        searchInput: '',
        page: 1
    };

    //act
    const url = makeSearchMovieUrl(queryOptions);
    const expected = '';

    //assert
    assert.equal(url, expected);
});