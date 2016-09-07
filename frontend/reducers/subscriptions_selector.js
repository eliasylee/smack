const SubscriptionsSelector = (subscriptions) => {
  return subscriptions.reduce( (obj, subscription) => {
    obj[subscription.id] = subscription;
    return obj;
  }, {});
};

export default SubscriptionsSelector;
