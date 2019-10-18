import {
  LOGIN,
  LOG_OUT,
  CLEAR_DATA,
  REGISTER_USER
} from '../actions/auth.actions';
const initialState = {
  token: '',
  status: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token
      };

    case REGISTER_USER:
      return {
        ...state,
        status: 'REGISTERED'
      };

    case LOG_OUT:
      return state;

    case CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
