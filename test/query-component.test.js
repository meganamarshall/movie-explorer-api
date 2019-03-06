import { writeSearchToQuery } from '../src/query-component.js';

const test = QUnit.test;
QUnit.module('query tests');

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

test('write search to existing query and update search/reset page to 1', assert => {
    //arrange
    const existingQuery = 'searchInput=elvis&page=4';
    const searchInput = 'beatles';

    //act
    const query = writeSearchToQuery(existingQuery, searchInput);
    const expected = 'searchInput=beatles&page=1';

    //assert
    assert.equal(query, expected);
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}
test('write page to existing query', assert => {
    //arrange
    const existingQuery = 'searchInput=elvis&page=4';
    const page = 5;
    //act
    const query = writePageToQuery(existingQuery, page);
    const expected = 'searchInput=elvis&page=5';
    //assert
    assert.equal(query, expected);
});

// test('read options from query', assert => {
//     //arrange
//     const query = 'searchInput=beatles&page=1';
//     const expected = {
//         searchInput: 'beatles',
//         page: 1
//     };
//     //act
//     const result = 
// });