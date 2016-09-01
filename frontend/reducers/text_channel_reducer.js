import { TextChannelConstants } from '../actions/text_channel_actions';
import merge from 'lodash/merge';

const defaultState = {
  textChannel: {},
  errors: []
}

const TextChannelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TextChannelConstants.RECEIVE_ONE_TEXT_CHANNEL:
      let textChannel = action.textChannel;
      return textChannel;
    case TextChannelConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default TextChannelReducer;
