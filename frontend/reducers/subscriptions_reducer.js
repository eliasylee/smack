import { SubscriptionConstants } from '../actions/subscription_actions';
import SubscriptionsSelector from './subscriptions_selector';
import merge from 'lodash/merge';

const defaultState = { }

const SubscriptionsReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case SubscriptionConstants.RECEIVE_ALL_SUBSCRIPTIONS:
      let keyedSubscriptions = SubscriptionsSelector(action.subscriptions);
      return keyedSubscriptions;
    case SubscriptionConstants.RECEIVE_SUBSCRIPTION:
      let newSub = action.subscription;
      newState[newSub.id] = newSub;
      return newState
    case SubscriptionConstants.RECEIVE_SUBSCRIPTION_ERRORS:
      let errors = action.errors;
      newState['errors'] = errors;
      return newState;
    case SubscriptionConstants.DESTROY_SUBSCRIPTION:
      let destroyedSubId = action.subscription;
      delete newState[destroyedSubId];
      return newState;
    default:
      return state;
  }
}

export default SubscriptionsReducer;
