import Const from './const';
import * as API from '../../data/api';
import {mapSearch} from '../mappers/search';

export const searchTracks = text => (dispatch, getState) => {
    API.searchTrack(text)
        .then(resp => {
            console.log(resp);
            dispatch({
                type: Const.search.save,
                payload: mapSearch(resp),
            })
        })
        .catch(e => console.log(e))
};