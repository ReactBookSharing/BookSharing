import { GET_ALL_BOOKS, GET_MY_BOOKS } from '../actions/book.actions';

const initialState = {
    allBooks: [],
    myBooks: []
};

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_ALL_BOOKS: 
            return {
                ...state,
                allBooks: action.payload
            }
        case GET_MY_BOOKS:
            return {
                ...state,
                myBooks: action.payload
            }
        default:
            return state;
    }
}