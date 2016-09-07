import { DirectMessageConstants } from '../actions/direct_message_actions';
import merge from 'lodash/merge';

const defaultState = [];

const DirectMessagesReducer = (state = defaultState, action) => {
  let newState = merge([], state)
  switch (action.type) {
    case DirectMessageConstants.RECEIVE_ALL_DIRECT_MESSAGES:
      let directMessages = action.directMessages;
      return directMessages;
    case DirectMessageConstants.RECEIVE_NEW_DIRECT_MESSAGE:
      let directMessage = action.directMessage;
      newState.push(directMessage);
      return newState;
    default:
      return state;
  }
}

export default DirectMessagesReducer;
