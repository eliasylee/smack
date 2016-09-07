export const fetchAllSubscriptions = (channel, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/subscriptions/${channel}`,
    data: channel,
    success
  });
};

export const createSubscription = (subscription, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/subscriptions',
    data: subscription,
    success
  });
};

export const destroySubscription = (subscription, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${subscription}`,
    data: subscription,
    success
  });
};
