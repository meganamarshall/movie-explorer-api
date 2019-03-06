export function makeAlbumList(album) {
    const html = /*html*/
    `<li>
        <h2>${album.items[0].name}</h2>
        <img src="${album.items[0].images[0].url}">
        <p>Release Year: ${album.items[0].release_date.slice(0, 4)}</p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const albumList = document.getElementById('album-list');

export default function loadAlbums(albums) {
    while(albumList.firstChild) {
        albumList.firstChild.remove();
    }
    const dom = makeAlbumList(album);
    albumList.appendChild(dom);
}