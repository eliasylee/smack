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
    case DirectMessageConstants.DESTROY_DIRECT_MESSAGE:
      let dmId = action.directMessage;
      newState.forEach( directMessage => {
        if (directMessage.id === dmId) {
          let idx = newState.indexOf(directMessage);
          newState = newState.slice(0, idx).concat(newState.slice(idx + 1, newState.length));
        }
      });
      return newState;
    default:
      return state;
  }
}

export default DirectMessagesReducer;
