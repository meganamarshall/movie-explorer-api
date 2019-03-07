export function writeSearchToQuery(existingQuery, searchInput) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchInput', searchInput);
    searchParams.set('page', 1);

    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function writeYearToQuery(existingQuery, year) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('year', year);
    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const pageString = searchParams.get('page');
    const yearString = searchParams.get('year');

    let page = 1;
    let year = null;

    if(pageString) {
        page = parseInt(pageString);
    }
    if(yearString) {
        year = parseInt(yearString);
    }
    const queryOptions = {
        searchInput: searchParams.get('searchInput'),
        page: page,
        year: year
    };

    return queryOptions;
}