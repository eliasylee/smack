import { SessionConstants,
         receiveCurrentUser,
         receiveErrors } from '../actions/session_actions';
import { logIn, logOut, signUp } from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const newCurrentUserSuccess = data => dispatch(receiveCurrentUser(data));
  const errors = (data) => dispatch(receiveErrors(data.responseJSON));

  switch (action.type) {
    case SessionConstants.LOGIN:
      logIn(action.user, newCurrentUserSuccess, errors);
      return next(action);
    case SessionConstants.SIGNUP:
      signUp(action.user, newCurrentUserSuccess, errors)
      return next(action);
    case SessionConstants.LOGOUT:
      logOut(() => (next(action)), errors)
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
