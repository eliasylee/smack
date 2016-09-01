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
    url: `/api/channels/${channel.id}`,
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

export const updateChannel = (channel, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: channel,
    success,
    error
  });
};
