export const fetchAllSubscriptions = (channel, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/subscriptions/${channel}`,
    data: channel,
    success,
    error
  });
};

export const createSubscription = (subscription, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/subscriptions',
    data: subscription,
    success,
    error
  });
};

export const destroySubscription = (subscription, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${subscription.id}`,
    data: subscription,
    success,
    error
  });
};
