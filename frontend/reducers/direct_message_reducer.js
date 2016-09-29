import { DirectMessageConstants } from '../actions/direct_message_actions';
import { DirectChatMessageConstants } from '../actions/direct_chat_message_actions';
import messageSelector from './message_selector';

import merge from 'lodash/merge';

const defaultState = {
  messages: {},
  errors: []
};

const DirectMessageReducer = (state = defaultState, action) => {
  let newState = merge({}, state)
  switch (action.type) {
    case DirectMessageConstants.RECEIVE_ONE_DIRECT_MESSAGE:
      let keyedMessages = messageSelector(action.directMessage.messages);
      newState.id = action.directMessage.id;
      newState.username = action.directMessage.username;
      newState.messages = keyedMessages;
      return newState
    case DirectMessageConstants.DISMOUNT_DIRECT_MESSAGE:
      return defaultState;
    case DirectMessageConstants.RECEIVE_DIRECT_MESSAGE_ERRORS:
      newState['errors'] = action.errors;
      return newState;
    case DirectChatMessageConstants.CLEAR_DIRECT_MESSAGE_ERRORS:
      newState['errors'] = [];
      return newState;
    case DirectChatMessageConstants.RECEIVE_ONE_DIRECT_CHAT_MESSAGE:
      let newMessage = action.directChatMessage;
      newState.messages[newMessage.id] = newMessage;
      return newState;
    case DirectChatMessageConstants.DESTROY_DIRECT_CHAT_MESSAGE:
      let destroyedMessage = action.directChatMessage;
      delete newState.messages[destroyedMessage.id]
      return newState;
    default:
      return state;
  }
}

export default DirectMessageReducer;
