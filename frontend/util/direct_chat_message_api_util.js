export const createDirectChatMessage = (directChatMessage, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/messages`,
    data: directChatMessage,
    success
  });
};

export const updateDirectChatMessage = (directChatMessage, success) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/messages/${directChatMessage.id}`,
    data: directChatMessage,
    success
  });
};

export const destroyDirectChatMessage = (directChatMessage, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/messages/${directChatMessage.id}`,
    data: directChatMessage,
    success
  });
};
