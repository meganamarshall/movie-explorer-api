export function makeMoviesList(movie) {
    let posterPath = null;
    if(movie.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
    }
    else {
        posterPath = '../assets/movie-placeholder.png';
    }
    
    const html = /*html*/
    `<li class="movie-card">
        <h2>${movie.title}</h2>
        <span id="hover-text">Click for Details</span>
        <img class="poster" src="${posterPath}">
        <p>Release Year: ${movie.release_date.slice(0, 4)}</p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const moviesList = document.getElementById('movies-list');

let selectCallback = null;

export default function loadMovies(callback) {
    selectCallback = callback;
}

let selectedMovie = null;

export function updateMovies(movies) {
    while(moviesList.firstChild) {
        moviesList.firstChild.remove();
    }
    movies.forEach(movie => {
        const dom = makeMoviesList(movie);
        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            if(selectedMovie) {
                selectedMovie.classList.remove('selected')
            }
            li.classList.add('selected');
            selectedMovie = li;
            selectCallback(movie.id);
        })
        moviesList.appendChild(dom);
    });
}