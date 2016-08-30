import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser
      return merge({}, state, { currentUser })
    case SessionConstants.RECEIVE_ERRORS:
      let errors = action.errors
      return merge({}, state, { errors })
    case SessionConstants.LOGOUT:
      return merge({}, state)
    default:
      return state;
  }
};

export default SessionReducer;
