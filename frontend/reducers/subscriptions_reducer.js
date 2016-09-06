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
    case SubscriptionConstants.RECEIVE_ONE_SUBSCRIPTION:
      let newSub = action.subscription;
      newState[newSub.channel_id] = newSub;
      return newState
    case SubscriptionConstants.DESTROY_SUBSCRIPTION:
      let destroyedSub = action.subscription;
      delete newState[destroyedSub.id];
      return newState;
    default:
      return state;
  }
}

export default SubscriptionsReducer;
