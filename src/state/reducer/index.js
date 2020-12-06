import {combineReducers} from 'redux';
import chart from './chart';
import artist from './artist';
import search from './search';

export default combineReducers({
    chart,
    artist,
    search,
});