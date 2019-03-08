
export function makeMovieDetail(movie) {
    const html = /*html*/
        `<article>
        <h3 id="title">${movie.title}</h3>
        <img id="backdrop" src="https://image.tmdb.org/t/p/w92${movie.backdrop_path}">
        <p id="tagline">${movie.tagline}</p> 
        <p id="overview">${movie.overview}</p>
        <a href="${movie.homepage}">Visit the site</a>
        </article>`
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const detailContainer = document.getElementById("detail-container");

export default function loadMovieDetail(movie) {
    while(detailContainer.firstChild) {
        detailContainer.firstChild.remove()
    }
    const dom = makeMovieDetail(movie);
    detailContainer.appendChild(dom);
}