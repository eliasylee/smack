import { ChannelConstants } from '../actions/channel_actions';
import ChannelSelector from './channel_selector';
import merge from 'lodash/merge';

const defaultState = {
  channels: {},
  errors: []
}

const ChannelsReducer = (state = defaultState, action) => {
  let newState = merge({}, state)
  switch (action.type) {
    case ChannelConstants.RECEIVE_ALL_CHANNELS:
      let keyedChannels = ChannelSelector(action.channels);
      newState.channels = keyedChannels;
      return newState;
    case ChannelConstants.DESTROY_CHANNEL:
      let destroyedChannel = action.channel;
      delete newState.channels[destroyedChannel.id];
      return newState;
    case ChannelConstants.RECEIVE_CHANNEL_ERRORS:
      let errors = action.errors;
      return merge(newState, { errors });
    default:
      return state;
  }
}

export default ChannelsReducer;
