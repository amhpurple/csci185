const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    document.querySelector('#tracks').innerHTML = '';
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    console.log(data);
    for (i = 0; i < 5; i++) {
    const tracks = data[i];
    const template = `
        <section class="track-item preview" id="${tracks.id}" onclick="loadTrack('${tracks.id}')">
            <img src="${tracks.album.image_url}" alt="${tracks.name} song image">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
            <div class="label">
                <h2>${tracks.artist.name}</h2>
                <p>
                    ${tracks.name}
                </p>
            </div>
        </section>
    `;
    // document.querySelector('#tracks').insertAdjacentHTML(
    //     'beforeend', template
    // )
    document.querySelector('#tracks').innerHTML += template;
    }
}

async function getAlbums (term) {
    document.querySelector('#albums').innerHTML = '';
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    console.log(data);
    for (i = 0; i < data.length; i++) {
        const albums = data[i];
        const template = `
            <section class="album-card" id="${albums.id}">
                <div>
                    <img src="${albums.image_url}" alt="${albums.name} album cover">
                    <h2>${albums.name}</h2>
                    <div class="footer">
                        <a href="${albums.spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
                </div>
            </section>
        `;
        document.querySelector('#albums').innerHTML += template;
    }
}

async function getArtist (term) {
   // this code goes to the internet and gets info from spotify about the artist
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    console.log(data);
    for (i = 0; i < data.length; i++) {
        const artist = data[0];
        const template = `
            <section class="artist-card" id="${artist.id}">
            <div>
                <img src="${artist.image_url}" alt="image of ${artist.name}">
                <h2>${artist.name}</h2>
                <div class="footer">
                    <a href="${artist.spotify_url}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
            </section>
        `;
        document.querySelector('#artist').innerHTML = template;
    }
};

function loadTrack (trackId) {
    const template = `
        <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = template;
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}