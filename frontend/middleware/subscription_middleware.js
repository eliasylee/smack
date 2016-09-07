import { SubscriptionConstants,
         receiveAllSubscriptions,
         receiveSubscription } from '../actions/subscription_actions';
import { fetchAllSubscriptions,
         createSubscription,
         destroySubscription } from '../util/subscription_api_util';

const SubscriptionMiddleware = ({ dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveAllSubscriptions(data));
  const createSuccess = data => dispatch(receiveSubscription(data));
  switch (action.type) {
    case SubscriptionConstants.FETCH_ALL_SUBSCRIPTIONS:
      fetchAllSubscriptions(action.channel, fetchAllSuccess);
      return next(action);
    case SubscriptionConstants.CREATE_SUBSCRIPTION:
      createSubscription(action.subscription, createSuccess);
      return next(action);
    case SubscriptionConstants.DESTROY_SUBSCRIPTION:
      destroySubscription(action.subscription, () => next(action));
      break;
    default:
      return next(action);
  }
};

export default SubscriptionMiddleware;
