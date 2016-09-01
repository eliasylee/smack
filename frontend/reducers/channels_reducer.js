import { ChannelConstants } from '../actions/channel_actions';
import merge from 'lodash/merge';

const defaultState = {
  channels: [],
  errors: []
}

const ChannelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ChannelConstants.RECEIVE_ALL_CHANNELS:
      let channels = action.channels;
      return merge({}, state, { channels })
    case ChannelConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default ChannelsReducer;
