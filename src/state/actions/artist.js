import Const from './const';
import * as API from '../../data/api';
import {mapArtist} from '../mappers/artist';

export const loadArtist = mbid => (dispatch, getState) => {
    API.fetchArtist(mbid)
        .then(resp => {
            console.log(resp);
            dispatch({
                type: Const.artist.save,
                payload: mapArtist(resp),
            })
        })
        .catch(e => console.log(e))
};