import { GET_LANG } from '../actions/common.actions';

const initialState = {
    lang: ''
};

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_LANG: 
            return {
                ...state,
                lang: action.payload
            }
        case CHANGE_LANG:
            return {
                ...state,
                langName: action.payload
            }
        default:
            return state;
    }
}