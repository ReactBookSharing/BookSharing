import { GET_LANG, CHANGE_LANG } from '../actions/common.actions';
import ru from '../assets/lang/ru.json';
const initialState = {
    lang: ru,
    langName: 'ru'
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