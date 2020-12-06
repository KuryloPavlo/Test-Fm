export const mapSearch = resp => 
    resp.results.trackmatches.track.map(item => ({
        songName: item.name,
        artistName: item.artist,
        listeners: item.listeners,
    }))