export const fetchAllDirectMessages = success => {
  $.ajax({
    method: 'GET',
    url: `/api/direct_messages`,
    success
  });
};

export const fetchOneDirectMessage = (directMessage, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/direct_messages/${directMessage}`,
    data: directMessage,
    success
  });
};

export const createDirectMessage = (directMessage, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/direct_messages`,
    data: directMessage,
    success,
    error
  });
};
