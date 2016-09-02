import { MessageConstants } from '../actions/message_actions';
import { TextChannelConstants } from '../actions/text_channel_options';
import { receiveOneTextChannel } from '../util/text_channel_api_util';

import merge from 'lodash/merge';

const defaultState = {
  messages: {},
  errors: []
}

const MessageReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case TextChannelConstants.RECEIVE_ONE_TEXT_CHANNEL:
      let messages = action.textChannel.messages;
      return merge({}, state, { messages })
    case MessageConstants.RECEIVE_ONE_MESSAGE:
      let message = action.message;
      newState[message.id] = message;
      return newState;
    case MessageConstants.CLEAR_TEXT_MESSAGES:
      return defaultState;
    case MessageConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default MessageReducer;
