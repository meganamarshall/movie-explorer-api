export function filterMoviesByYear(movies, filter) {
    return movies.filter(movie => {
        const releaseDate = movie.release_date.slice(0, 4);
        const hasYear = !filter.release_date || releaseDate === filter.release_date;
        return hasYear;
    });
}