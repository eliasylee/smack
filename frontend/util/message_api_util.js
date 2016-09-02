export const createMessage = (message, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/messages`,
    data: message,
    success,
    error
  });
};

export const updateMessage = (message, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/messages/${message.id}`,
    data: message,
    success,
    error
  });
};

export const destroyMessage = (message, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/messages/${message.id}`,
    data: message,
    success,
    error
  });
};
