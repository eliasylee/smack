import { TextChannelConstants } from '../actions/text_channel_actions';
import { MessageConstants } from '../actions/message_actions';
import MessagesReducer from './messages_reducer';
import messageSelector from './message_selector';
import merge from 'lodash/merge';

const defaultState = {
  textChannel: {
    messages: {}
  },
  errors: []
}

const TextChannelReducer = (state = defaultState, action) => {
  let newMessages;
  let newState = merge({}, state);
  switch (action.type) {
    case TextChannelConstants.RECEIVE_ONE_TEXT_CHANNEL:
      let textChannel = action.textChannel
      let keyedMessages = messageSelector(textChannel.attachments);
      newState.textChannel.id = textChannel.id;
      newState.textChannel.title = textChannel.title;
      newState.textChannel.description = textChannel.description;
      newState.textChannel.messages = keyedMessages;
      return newState;
    case MessageConstants.RECEIVE_ONE_MESSAGE:
      newMessages = MessagesReducer(state.textChannel.messages, action);
      newState.textChannel.messages = newMessages;
      return newState;
    case MessageConstants.DESTROY_MESSAGE:
      newMessages = MessagesReducer(state.textChannel.messages, action);
      newState.textChannel.messages = newMessages;
      return newState;
    case TextChannelConstants.RECEIVE_TEXT_CHANNEL_ERRORS:
      let errors = action.errors;
      newState.errors = errors;
      return newState;
    default:
      return state;
  }
}

export default TextChannelReducer;
