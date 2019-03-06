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

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const pageString = searchParams.get('page');

    let page = 1;

    if(!pageString) {
        page = parseInt(pageString);
    }
    
    const queryOptions = {
        searchInput: searchParams.get('searchInput'),
        page: page
    };

    return queryOptions;
}