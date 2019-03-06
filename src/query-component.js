export function writeSearchToQuery(existingQuery, searchInput) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchInput', searchInput);
    searchParams.set('page', 1);

    return searchParams.toString();
}