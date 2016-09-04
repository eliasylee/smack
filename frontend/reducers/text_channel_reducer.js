import { TextChannelConstants } from '../actions/text_channel_actions';
import { MessageConstants } from '../actions/message_actions';
import { MessagesReducer } from './messages_reducer';
import messageSelector from './message_selector';
import merge from 'lodash/merge';

const defaultState = {
  textChannel: {
    messages: {}
  },
  errors: []
}

const TextChannelReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case TextChannelConstants.RECEIVE_ONE_TEXT_CHANNEL:
      let textChannel = action.textChannel
      let keyedMessages = messageSelector(textChannel.attachments);
      newState.textChannel.id = textChannel.id;
      newState.textChannel.description = textChannel.description;
      newState.textChannel.messages = keyedMessages;
      return newState;
    case MessageConstants.CLEAR_TEXT_MESSAGES:
      newState.textChannel.attachments = [];
      return merge({}, state, newState);
    case MessageConstants.RECEIVE_ONE_MESSAGE:
      let newMessages = MessagesReducer(state.textChannel.messages, action);
      newState = defaultState.textChannel.messages = newMessages;
      return merge({}, state, newState);
    case TextChannelConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default TextChannelReducer;
