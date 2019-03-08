import { makeMovieDetail } from '../src/movie-detail-component.js';
const test = QUnit.test;

test('make movie detail', assert => {
    const movie = {
            "adult": false,
            "backdrop_path": "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",
            "belongs_to_collection": {
                "id": 422837,
                "name": "Blade Runner Collection",
                "poster_path": "/cWESb1o9lW2i2Z3Xllv9u40aNIk.jpg",
                "backdrop_path": "/bSHZIvLoPBWyGLeiAudN1mXdvQX.jpg"
            },
            "genres": [
                {
                    "id": 878,
                    "name": "Science Fiction"
                },
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 53,
                    "name": "Thriller"
                }
            ],
            "homepage": "http://www.warnerbros.com/blade-runner",
            "id": 78,
            "imdb_id": "tt0083658",
            "original_language": "en",
            "tagline": "Man has made his match... now it's his problem.",
            "original_title": "Blade Runner",
            "overview": "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
            "title": "Blade Runner"
        }

    const dom = makeMovieDetail(movie);
    const expected = /*html*/
                    `<article>
                    <h3 id="title">Blade Runner</h3>
                    <img id="backdrop" src="https://image.tmdb.org/t/p/w92/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg">
                    <p id="tagline">Man has made his match... now it's his problem.</p> 
                    <p id="overview">In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.</p>
                    <p id="genres">Genre: Science Fiction</p>
                    <a href="http://www.warnerbros.com/blade-runner">Visit the site</a>
                    </article>`

    assert.htmlEqual(dom, expected);
});