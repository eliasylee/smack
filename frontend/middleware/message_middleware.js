import { MessageConstants,
         receiveOneMessage,
         receiveErrors } from '../actions/message_actions';
import { fetchOneMessage,
         createMessage,
         updateMessage } from '../util/message_api_util';

const MessageMiddleware = ({ dispatch }) => next => action => {
  const fetchOneSuccess = data => dispatch(receiveOneMessage(data));
  const createMessageSuccess = data => dispatch(receiveOneMessage());
  const updateMessageSuccess = data => dispatch(receiveOneMessage());
  const errors = data => dispatch(receiveErrors(data));
  switch (action.type) {
    case MessageConstants.FETCH_ONE_MESSAGE:
      fetchOneMessage(action.channel, fetchOneSuccess, errors);
      return next(action);
    case MessageConstants.CREATE_MESSAGE:
      createMessage(action.channel, createMessageSuccess, errors);
      return next(action);
    case MessageConstants.UPDATE_MESSAGE:
      updateMessage(action.channel, updateMessageSuccess, errors);
      return next(action);
    default:
      return next(action);
  }
};

export default MessageMiddleware;
