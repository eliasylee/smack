import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, defaultState, { currentUser });
    case SessionConstants.RECEIVE_LOGOUT_ERRORS:
      let errors = action.errors;
      return merge({}, defaultState, { errors });
    case SessionConstants.LOGOUT:
      return merge({}, defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
