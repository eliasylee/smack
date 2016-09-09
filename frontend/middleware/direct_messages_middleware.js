import { DirectMessageConstants,
         receiveAllDirectMessages,
         receiveOneDirectMessage,
         receiveNewDirectMessage } from '../actions/direct_message_actions';
import { fetchAllDirectMessages,
         fetchOneDirectMessage,
         createDirectMessage } from '../util/direct_message_api_util';

const DirectMessagesMiddleWare = ({ dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveAllDirectMessages(data));
  const fetchOneSuccess = data => dispatch(receiveOneDirectMessage(data));
  const createSuccess = data => dispatch(receiveNewDirectMessage(data));
  switch (action.type) {
    case DirectMessageConstants.FETCH_ALL_DIRECT_MESSAGES:
      fetchAllDirectMessages(fetchAllSuccess);
      return next(action);
    case DirectMessageConstants.FETCH_ONE_DIRECT_MESSAGE:
      fetchOneDirectMessage(action.directMessage, fetchOneSuccess);
      return next(action);
    case DirectMessageConstants.CREATE_DIRECT_MESSAGE:
      createDirectMessage(action.directMessage, createSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default DirectMessagesMiddleWare;