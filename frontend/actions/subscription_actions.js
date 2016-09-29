export const SubscriptionConstants = {
  FETCH_ALL_SUBSCRIPTIONS: 'FETCH_ALL_SUBSCRIPTIONS',
  RECEIVE_ALL_SUBSCRIPTIONS: 'RECEIVE_ALL_SUBSCRIPTIONS',
  CREATE_SUBSCRIPTION: 'CREATE_SUBSCRIPTION',
  RECEIVE_SUBSCRIPTION: 'RECEIVE_SUBSCRIPTION',
  DESTROY_SUBSCRIPTION: 'DESTROY_SUBSCRIPTION',
  RECEIVE_SUBSCRIPTION_ERRORS: 'RECEIVE_SUBSCRIPTION_ERRORS'
}

export const fetchAllSubscriptions = channel => ({
  type: SubscriptionConstants.FETCH_ALL_SUBSCRIPTIONS,
  channel
})

export const receiveAllSubscriptions = subscriptions => ({
  type: SubscriptionConstants.RECEIVE_ALL_SUBSCRIPTIONS,
  subscriptions
})

export const createSubscription = subscription => ({
  type: SubscriptionConstants.CREATE_SUBSCRIPTION,
  subscription
})

export const receiveSubscription = subscription => ({
  type: SubscriptionConstants.RECEIVE_SUBSCRIPTION,
  subscription
})

export const destroySubscription = (subscription) => ({
  type: SubscriptionConstants.DESTROY_SUBSCRIPTION,
  subscription
})

export const receiveSubscriptionErrors = errors => ({
  type: SubscriptionConstants.RECEIVE_SUBSCRIPTION_ERRORS,
  errors
})
