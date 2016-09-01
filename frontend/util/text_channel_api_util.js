export const fetchOneTextChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/textChannels/${textChannel.id}`,
    success,
    error
  });
};

export const createChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/textChannels/${textChannel.id}`,
    data: textChannel,
    success,
    error
  });
};

export const updateChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/textChannels/${textChannel.id}`,
    data: textChannel,
    success,
    error
  });
};
