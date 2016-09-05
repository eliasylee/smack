export const fetchOneTextChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/text_channels/${textChannel}`,
    success,
    error
  });
};

export const createTextChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/text_channels`,
    data: textChannel,
    success,
    error
  });
};

export const updateTextChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/text_channels/${textChannel.id}`,
    data: textChannel,
    success,
    error
  });
};

export const destroyTextChannel = (textChannel, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/text_channels/${textChannel.id}`,
    data: textChannel,
    success,
    error
  });
};
