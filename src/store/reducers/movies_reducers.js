import {
    MOVIES_LIST,
    MOVIE_DATA
} from '../types';

const DEFAULT_STORE = {
    userName: 'Francis',
    userId: 1234
}


export default function appReducer(state = DEFAULT_STORE, action) {
    switch (action.type) {
        case MOVIES_LIST:
            return { ...state, moviesList: action.payload }
        case MOVIE_DATA:
            return { ...state, movieData: action.payload }
        default:
            return state
    }
}