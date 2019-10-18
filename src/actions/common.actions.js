export const GET_LANG = 'GET_LANG';
export const CHANGE_LANG ='CHANGE_LANG';

export const getLang = langJSON => dispatch => {
    dispatch({
        action: GET_LANG,
        payload: langJSON
    });
}

export const changeLang = lang => dispatch => {
    dispatch({
        action: CHANGE_LANG,
        payload: lang
    });
}