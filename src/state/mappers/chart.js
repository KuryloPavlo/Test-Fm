export const mapSongs = songs => 
    songs.tracks.track.map(item => ({
        songName: item.name,
        artistName: item.artist.name,
        artistID: item.artist.mbid,
        artistURL: item.artist.url,
    })) 