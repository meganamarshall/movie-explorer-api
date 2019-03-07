export function makeMoviesList(movie) {
    let posterPath = null;
    if(movie.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
    }
    else {
        posterPath = '../assets/movie-placeholder.png';
    }
    
    const html = /*html*/
    `<li>
        <h2>${movie.title}</h2>
        <img src="${posterPath}">
        <p>Release Year: ${movie.release_date.slice(0, 4)}</p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const moviesList = document.getElementById('movies-list');

export default function loadMovies(movies) {
    while(moviesList.firstChild) {
        moviesList.firstChild.remove();
    }
    movies.forEach(movie => {
        const dom = makeMoviesList(movie);
        moviesList.appendChild(dom);
    });
}
