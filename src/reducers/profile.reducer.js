import {
  GET_MY_PROFILE,
  GET_PROFILE,
  CREATE_PROFILE,
  PROFILE_TO_EDIT
} from '../actions/profile.actions';
const initialState = {
  myProfile: {},
  profile: {},
  status: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MY_PROFILE:
        return {
            ...state,
            myProfile: action.payload
        }
    case GET_PROFILE:
        return {
            ...state,
            profile: action.payload
        }
    case CREATE_PROFILE:
        return {
            ...state,
            status: "CREATED"
        }
    case PROFILE_TO_EDIT:
        return {
            ...state,
            status: "EDITED",
            profile: action.payload
        }
    default:
      return state;
  }
}
