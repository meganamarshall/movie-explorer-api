const test = QUnit.test;
QUnit.module('query tests');

function writeSearchToQuery(existingQuery, searchInput) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchInput', searchInput);
    searchParams.set('page', 1);

    return searchParams.toString();
}

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchInput = 'elvis';
    //act
    const query = writeSearchToQuery(existingQuery, searchInput);
    const expected = 'searchInput=elvis&page=1';
    //assert
    assert.equal(query, expected);
});