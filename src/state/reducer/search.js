import Const from '../actions/const';

const initialState = {
    tracks: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Const.search.save:
            return{
                ...state,
                tracks: action.payload,
            }
        default:
            return state;
    }
}