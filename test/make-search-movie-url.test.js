const test = QUnit.test;

QUnit.module('making url based on search');

const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'cb74bb60617505504abd12bd45490b45';

function makeSearchMovieUrl(queryOptions) {
    const searchInput = queryOptions.searchInput;
    if(!searchInput) {
        return '';
    }
    const url = new URL(SEARCH_MOVIE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', searchInput);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}

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