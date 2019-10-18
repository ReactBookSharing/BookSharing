export const GET_MY_PROFILE = 'GET_MY_PROFILE';
export const GET_PROFILE = 'GET_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const PROFILE_TO_EDIT = 'PROFILE_TO_EDIT';


export const getMyProfile = response => dispatch => {
    dispatch({
        type: GET_MY_PROFILE,
        payload: response.data
    });
};

export const getProfile = response => dispatch => {
    dispatch({
        type: GET_PROFILE,
        payload: response.data
    });
}

export const createProfile = response => dispatch => {
    dispatch({
        type: CREATE_PROFILE,
        payload: response.data
    });
}

export const editProfile = response => dispatch => {
    dispatch({
        type: PROFILE_TO_EDIT,
        payload: response.data
    });
}