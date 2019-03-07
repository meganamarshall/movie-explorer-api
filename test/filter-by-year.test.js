import { filterMoviesByYear } from '../src/filter-component.js';

const test = QUnit.test;

QUnit.module('filtering by release year');

const movies = [
    { title: 'Batman', release_date: '2018-05-04' },
    { title: 'Superman', release_date: '2018-05-04' },
    { title: 'Batman', release_date: '2015-05-04' }
];

test('filters on release year', assert => {
    //arrange
    const filter = { release_date: '2018' };

    //act
    const filtered = filterMoviesByYear(movies, filter);
    const expected = [
        { title: 'Batman', release_date: '2018-05-04' },
        { title: 'Superman', release_date: '2018-05-04' }
    ];
    //assert
    assert.deepEqual(filtered, expected);
});

test('no filter on release year returns all movies for that specific search input', assert => {
    //arrange
    const filter = { release_date: '' };

    //act
    const filtered = filterMoviesByYear(movies, filter);
    const expected = movies;
    
    //assert
    assert.deepEqual(filtered, expected);
});
