export const GET_LANG = 'GET_LANG';
export const CHANGE_LANG ='CHANGE_LANG';

export const getLang = (langJSON, langName) => dispatch => {
    dispatch({
        type: GET_LANG,
        payload: langJSON
    });
}

export const changeLang = lang => dispatch => {
    dispatch({
        type: CHANGE_LANG,
        payload: lang
    });
}