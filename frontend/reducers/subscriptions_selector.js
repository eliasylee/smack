const SubscriptionsSelector = (subscriptions) => {
  return subscriptions.reduce( (obj, subscription) => {
    obj[subscription.user_id] = subscription;
    return obj;
  }, {});
};

export default SubscriptionsSelector;
