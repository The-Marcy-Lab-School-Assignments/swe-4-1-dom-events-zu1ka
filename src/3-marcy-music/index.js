const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...






/*


<li class="playlist-card" data-title="Chill Vibes">
 <img src="./img/playlist-chill.jpg"  alt="Chill Vibes playlist cover" />
 <p>Chill Vibes</p>
</li>


*/




const nowPlaying = document.querySelector("#now-playing-title")
const songList = document.querySelector("#playlists-grid")


playlists.forEach((song) => {
  const playlistLi = document.createElement("li")
  const playlistImg = document.createElement("img")
  const playlistTitle = document.createElement("p")


  playlistLi.classList.add("playlist-card")
  playlistLi.dataset.title = song.title
  playlistImg.src = song.image
  playlistImg.alt = `${song.title} playlist cover`
  playlistTitle.textContent = song.title


  playlistLi.append(playlistImg, playlistTitle)
  songList.append(playlistLi)
})


songList.addEventListener("click", (event) => {
  const clickedPlaylist = event.target.closest('li')
  if (!clickedPlaylist) return
  document.querySelectorAll(".playlist-card").forEach((card) => {
    card.classList.remove("selected")
  })


  clickedPlaylist.classList.add("selected")
  nowPlaying.textContent = clickedPlaylist.dataset.title

})
