export const fetchAllChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    success,
    error
  });
};

export const fetchOneChannel = (channel, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/channels/${channel}`,
    success,
    error
  });
};

export const createChannel = (channel, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: channel,
    success,
    error
  });
};

export const destroyChannel = (channel, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/channels/${channel.id}`,
    data: channel,
    success,
    error
  });
};

export const updateChannel = (channel, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: channel,
    success,
    error
  });
};
