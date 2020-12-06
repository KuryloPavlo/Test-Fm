import Const from './const';
import * as API from '../../data/api';
import {mapSongs} from '../mappers/chart';

export const loadSongs = () => (dispatch, getState) => {
    API.fetchTrack()
        .then(resp => {
            console.log(resp);
            dispatch({
                type: Const.chart.save,
                payload: mapSongs(resp),
            });
        })
        .catch(e => console.log(e))
};