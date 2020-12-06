export const mapArtist = perfomer => 
    ({
        name: perfomer.artist.name,
        tags: perfomer.artist.tags.tag,
        bio: perfomer.artist.bio.summary,
    })
