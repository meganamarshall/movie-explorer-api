import { writeSearchToQuery } from '../src/query-component.js';
import { writePageToQuery } from '../src/query-component.js';
import { readFromQuery } from '../src/query-component.js';
import { writeYearToQuery } from '../src/query-component.js';

const test = QUnit.test;
QUnit.module('query tests');

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchInput = 'batman';
    //act
    const query = writeSearchToQuery(existingQuery, searchInput);
    const expected = 'searchInput=batman&page=1&year=';
    //assert
    assert.equal(query, expected);
});

test('write search to existing query and update search/reset page to 1', assert => {
    //arrange
    const existingQuery = 'searchInput=batman&page=4&year=';
    const searchInput = 'star wars';

    //act
    const query = writeSearchToQuery(existingQuery, searchInput);
    const expected = 'searchInput=star+wars&page=1&year=';

    //assert
    assert.equal(query, expected);
});

test('write page to existing query', assert => {
    //arrange
    const existingQuery = 'searchInput=batman&page=4';
    const page = 5;
    //act
    const query = writePageToQuery(existingQuery, page);
    const expected = 'searchInput=batman&page=5';
    //assert
    assert.equal(query, expected);
});

test('write year to existing query', assert => {
    //arrange
    const existingQuery = 'searchInput=batman&page=4&year=';
    const year = '1991';
    //act
    const query = writeYearToQuery(existingQuery, year);
    const expected = 'searchInput=batman&page=1&year=1991';
    //assert
    assert.equal(query, expected);
});

test('remove year from query when user enters new search', assert => {
    //arrange
    const existingQuery = 'searchInput=batman&page=4&year=1991';
    const searchInput = 'star wars';
    const year = null;
    //act
    const query = writeSearchToQuery(existingQuery, searchInput);
    const expected = 'searchInput=star+wars&page=1&year=';

    //assert
    assert.equal(query, expected);
})

test('read options from query', assert => {
    //arrange
    const query = 'searchInput=batman&page=1&year=1990';
    const expected = {
        searchInput: 'batman',
        page: 1,
        year: 1990
    };
    //act
    const options = readFromQuery(query);
    //assert
    assert.deepEqual(options, expected);
});