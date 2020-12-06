import Const from '../actions/const';

const initialState = {
    songs: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Const.chart.save:
            return{
                ...state,
                songs: action.payload,
            };
        default:
            return state;
    }
}