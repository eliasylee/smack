import { DirectChatMessageConstants,
         receiveOneDirectChatMessage } from '../actions/direct_chat_message_actions';
import { createDirectChatMessage,
         updateDirectChatMessage,
         destroyDirectChatMessage } from '../util/direct_chat_message_api_util';

const DirectChatMessageMiddleware = ({ dispatch }) => next => action => {
  const fetchOneSuccess = data => dispatch(receiveOneDirectChatMessage(data));
  const createDirectChatMessageSuccess = data => dispatch(receiveOneDirectChatMessage(data));
  const updateDirectChatMessageSuccess = data => dispatch(receiveOneDirectChatMessage(data));
  switch (action.type) {
    case DirectChatMessageConstants.CREATE_DIRECT_CHAT_MESSAGE:
      createDirectChatMessage(action.directChatMessage, createDirectChatMessageSuccess);
      return next(action);
    case DirectChatMessageConstants.UPDATE_DIRECT_CHAT_MESSAGE:
      updateDirectChatMessage(action.directChatMessage, updateDirectChatMessageSuccess);
      return next(action);
    case DirectChatMessageConstants.DESTROY_DIRECT_CHAT_MESSAGE:
      destroyDirectChatMessage(action.directChatMessage, () => next(action));
      break;
    default:
      return next(action);
  }
};

export default DirectChatMessageMiddleware;
