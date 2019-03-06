import { makeAlbumList } from '../src/list-component.js';
const test = QUnit.test;

QUnit.module('make album template');

test('generate album list item', assert => {
    //arrange
    const album = {
        items: [{
            name: 'Shut Up Lets Dance (Vol. II)',
            images: [{ url: 'https://i.scdn.co/image/0da79956d0440a55b20ea4e8e38877bce43275cd' }],
            release_date: '2018-02-09'
        }]
    };
    const expected = /*html*/
        `<li>
            <h2>Shut Up Lets Dance (Vol. II)</h2>
            <img src="https://i.scdn.co/image/0da79956d0440a55b20ea4e8e38877bce43275cd">
            <p>Release Year: 2018</p>
        </li>`;
    //act
    const result = makeAlbumList(album);
    //assert
    assert.htmlEqual(result, expected);
});