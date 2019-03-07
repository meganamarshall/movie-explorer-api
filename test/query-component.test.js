import { writeSearchToQuery } from '../src/query-component.js';
import { writePageToQuery } from '../src/query-component.js';
import readFromQuery from '../src/query-component.js';

const test = QUnit.test;
QUnit.module('query tests');

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchInput = 'batman';
    //act
    const query = writeSearchToQuery(existingQuery, searchInput);
    const expected = 'searchInput=batman&page=1';
    //assert
    assert.equal(query, expected);
});

test('write search to existing query and update search/reset page to 1', assert => {
    //arrange
    const existingQuery = 'searchInput=batman&page=4';
    const searchInput = 'star wars';

    //act
    const query = writeSearchToQuery(existingQuery, searchInput);
    const expected = 'searchInput=star+wars&page=1';

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

test('read options from query', assert => {
    //arrange
    const query = 'searchInput=batman&page=1';
    const expected = {
        searchInput: 'batman',
        page: 1
    };
    //act
    const options = readFromQuery(query);
    //assert
    assert.deepEqual(options, expected);
});