import { MessageConstants } from '../actions/message_actions';
import merge from 'lodash/merge';

const defaultState = { errors: [] }

const MessagesReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case MessageConstants.RECEIVE_ONE_MESSAGE:
      let message = action.message;
      newState[message.id] = message;
      return newState;
    case MessageConstants.RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    case MessageConstants.DESTROY_MESSAGE:
      let destroyedMessage = action.message;
      delete newState[destroyedMessage.id];
      return newState;
    default:
      return state;
  }
}

export default MessagesReducer;
