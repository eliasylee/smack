import { ChannelConstants } from '../actions/channel_actions';
import merge from 'lodash/merge';

const defaultState = {
  channel: {},
  errors: []
}

const ChannelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ChannelConstants.RECEIVE_ONE_CHANNEL:
      let channel = action.channel;
      return merge({}, state, { channel });
    case ChannelConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default ChannelReducer;