import { TextChannelConstants } from '../actions/text_channel_actions';
import { MessageConstants } from '../actions/message_actions';
import { MessagesReducer } from './messages_reducer';
import merge from 'lodash/merge';

const defaultState = {
  textChannel: {},
  errors: []
}

const TextChannelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TextChannelConstants.RECEIVE_ONE_TEXT_CHANNEL:
      let textChannel = action.textChannel;
      return merge({}, state, { textChannel });
    case MessageConstants.CLEAR_TEXT_MESSAGES:
      let newState = merge({}, state);
      newState.textChannel.attachments = [];
      return newState;
    case MessageConstants.RECEIVE_ONE_MESSAGE:
      let messages = MessagesReducer(state.messages, action);
      return merge({}, state, { messages });
    case TextChannelConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default TextChannelReducer;
