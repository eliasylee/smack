import { DirectMessageConstants,
         receiveAllDirectMessages,
         receiveOneDirectMessage,
         receiveNewDirectMessage,
         receiveDirectMessageErrors } from '../actions/direct_message_actions';
import { fetchAllDirectMessages,
         fetchOneDirectMessage,
         createDirectMessage,
         destroyDirectMessage } from '../util/direct_message_api_util';

const DirectMessagesMiddleWare = ({ dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveAllDirectMessages(data));
  const fetchOneSuccess = data => dispatch(receiveOneDirectMessage(data));
  const createSuccess = data => dispatch(receiveNewDirectMessage(data));
  const errors = data => dispatch(receiveDirectMessageErrors(data.responseJSON));
  switch (action.type) {
    case DirectMessageConstants.FETCH_ALL_DIRECT_MESSAGES:
      fetchAllDirectMessages(fetchAllSuccess);
      return next(action);
    case DirectMessageConstants.FETCH_ONE_DIRECT_MESSAGE:
      fetchOneDirectMessage(action.directMessage, fetchOneSuccess);
      return next(action);
    case DirectMessageConstants.CREATE_DIRECT_MESSAGE:
      createDirectMessage(action.directMessage, createSuccess, errors);
      return next(action);
    case DirectMessageConstants.DESTROY_DIRECT_MESSAGE:
      destroyDirectMessage(action.directMessage, () => next(action));
      break;
    default:
      return next(action);
  }
};

export default DirectMessagesMiddleWare;
