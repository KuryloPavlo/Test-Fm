import Const from '../actions/const';

const initalState = {
    artist: {},
}

export default (state = initalState, action) => {
    switch (action.type) {
        case Const.artist.save: 
            return{
                ...state,
                artist: action.payload,
            }
        default:
            return state;
    }
}