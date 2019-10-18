import { combineReducers } from "redux";
import profileReducer from './profile.reducer';
import bookReducer from './book.reducer';
import authReducer from './auth.reducer';
const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    book: bookReducer
});

export default rootReducer;