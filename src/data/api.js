import {BASE_URL, APPLICATION_KEY} from './config';

const fetchAPI = (method, queryParams) => {
    let fullUrl = `${BASE_URL}?method=${method}&api_key=${APPLICATION_KEY}&format=json`;
    if (queryParams) {
        fullUrl = fullUrl.concat(`&${queryParams}`)
    }
    console.log(fullUrl);
    return fetch(fullUrl).then(resp => {
        console.log(resp)
        return resp.json()
    }).catch(e => console.log(e));
}

export const fetchTrack = () => {
    return fetchAPI('chart.gettoptracks');
}

export const fetchArtist = mbid => {
    return fetchAPI('artist.getinfo', `mbid=${mbid}`);
}

export const searchTrack = text => {
    return fetchAPI('track.search', `track=${text}`)
}
