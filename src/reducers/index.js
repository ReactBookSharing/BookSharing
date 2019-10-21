import { combineReducers } from "redux";
import profileReducer from './profile.reducer';
import bookReducer from './book.reducer';
import authReducer from './auth.reducer';
import commonsReducer from './common.reducer';
const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    book: bookReducer,
    common: commonsReducer
});

export default rootReducer;