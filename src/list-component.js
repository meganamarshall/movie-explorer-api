import data from '../data/data.js';

// const dataItems = data.item;

export function makeAlbumList(dataItems) {
    const html = /*html*/
    `<li>
        <h2>${dataItems.name}</h2>
        <img src="${dataItems.images[0].url}">
        <p>Release Year: ${dataItems.release_date.slice(0, 4)}</p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const albumList = document.getElementById('album-list');

export default function loadAlbums(dataItems) {
    while(albumList.firstChild) {
        albumList.firstChild.remove();
    }
    dataItems.forEach(item => {
        const dom = makeAlbumList(item);
        albumList.appendChild(dom);
    });
}
