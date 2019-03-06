export function makeAlbumList(album) {
    const html = /*html*/
    `<li>
        <h2>${album.name}</h2>
        <img src="${album.images[0].url}">
        <p>Release Year: ${album.release_date.slice(0, 4)}</p>
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