import { DirectMessageConstants } from '../actions/direct_message_actions';
import { MessageConstants } from '../actions/message_actions';
import MessagesReducer from './messages_reducer';
import messageSelector from './message_selector';

import merge from 'lodash/merge';

const defaultState = {
  messages: {}
};

const DirectMessageReducer = (state = defaultState, action) => {
  let newState = merge({}, state)
  switch (action.type) {
    case DirectMessageConstants.RECEIVE_ONE_DIRECT_MESSAGE:
      let keyedMessages = messageSelector(action.messages);
      newState.username = action.username;
      newState.messages = keyedMessages;
      return newState
    default:
      return state;
  }
}

export default DirectMessageReducer;
