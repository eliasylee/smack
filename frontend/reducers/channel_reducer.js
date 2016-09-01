import { ChannelConstants } from '../actions/channel_actions';
import merge from 'lodash/merge';

const defaultState = {
  channels: [],
  channel: null,
  errors: []
}

const ChannelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ChannelConstants.RECEIVE_ALL_CHANNELS:
      let channels = action.channels;
      return merge({}, state, { channels })
    case ChannelConstants.RECEIVE_ONE_CHANNEL:
      let channel = action.channel;
      return merge({}, state, { channel });
    case ChannelConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
  }
}

export default ChannelReducer;
