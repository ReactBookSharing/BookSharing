export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const GET_MY_BOOKS = 'GET_MY_BOOKS';

export const getAllBooks = response => dispatch =>  {
    dispatch({
        type: GET_ALL_BOOKS,
        payload: response.data
    });
}

export const getMyBooks = response => dispatch => {
    dispatch({
        type: GET_MY_BOOKS,
        payload: response.data
    })
}