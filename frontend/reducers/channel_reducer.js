import { ChannelConstants } from '../actions/channel_actions';
import { TextChannelConstants } from '../actions/text_channel_actions';
import TextChannelSelector from './text_channel_selector';
import merge from 'lodash/merge';

const defaultState = {
  channel: {
    admin: {},
    textChannels: {}
  },
  errors: []
}

const ChannelReducer = (state = defaultState, action) => {
  let newState = merge({}, state)
  switch (action.type) {
    case ChannelConstants.RECEIVE_ONE_CHANNEL:
      let channel = action.channel;
      let keyedTextChannels = TextChannelSelector(channel.attachments);
      newState = merge(newState, { channel })
      newState.channel.textChannels = keyedTextChannels;
      return newState;
    case ChannelConstants.CLEAR_TEXT_CHANNELS:
      let emptyChannelState = merge({}, state);
      emptyChannelState.channel.textChannels = {};
      return emptyChannelState;
    case TextChannelConstants.RECEIVE_ONE_TEXT_CHANNEL:
      let textChannel = action.textChannel;
      newState.channel.textChannels[textChannel.id] = textChannel;
      return newState;
    case TextChannelConstants.RECEIVE_NEW_TEXT_CHANNEL:
      let newTextChannel = action.textChannel;
      newState.channel.textChannels[newTextChannel.id] = newTextChannel;
      return newState;
    case TextChannelConstants.DESTROY_TEXT_CHANNEL:
      let destroyedTextChannel = action.textChannel;
      delete newState[destroyedTextChannel.id];
      return newState;
    case ChannelConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default ChannelReducer;
