const messageSelector = (messages) => {
  return messages.reduce( (obj, message) => {
    obj[message.id] = message;
    return obj;
  }, {});
};

export default messageSelector;
