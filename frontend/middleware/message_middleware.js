import { MessageConstants,
         receiveOneMessage,
         receiveErrors } from '../actions/message_actions';
import { createMessage,
         updateMessage,
         destroyMessage } from '../util/message_api_util';

const MessageMiddleware = ({ dispatch }) => next => action => {
  const fetchOneSuccess = data => dispatch(receiveOneMessage(data));
  const createMessageSuccess = data => dispatch(receiveOneMessage(data));
  const updateMessageSuccess = data => dispatch(receiveOneMessage(data));
  const errors = data => dispatch(receiveErrors(data));
  switch (action.type) {
    case MessageConstants.CREATE_MESSAGE:
      createMessage(action.message, createMessageSuccess, errors);
      return next(action);
    case MessageConstants.UPDATE_MESSAGE:
      updateMessage(action.message, updateMessageSuccess, errors);
      return next(action);
    case MessageConstants.DESTROY_MESSAGE:
      destroyMessage(action.message, () => next(action), errors);
      break;
    default:
      return next(action);
  }
};

export default MessageMiddleware;
