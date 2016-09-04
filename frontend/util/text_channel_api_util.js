export const fetchOneTextChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/text_channels/${textChannel}`,
    success,
    error
  });
};

export const createChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/text_channels/${textChannel.id}`,
    data: textChannel,
    success,
    error
  });
};

export const updateChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/text_channels/${textChannel.id}`,
    data: textChannel,
    success,
    error
  });
};
