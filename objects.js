var playlist = {Prime: "I've Changed"}
function updatePlaylist(playlist, artistName, songTitle) {
 return playlist.assign({}, playlist, { [artistName]: songTitle})
}