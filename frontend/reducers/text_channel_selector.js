const TextChannelSelector = (textChannels) => {
  return textChannels.reduce( (obj, textChannel) => {
    obj[textChannel.id] = textChannel;
    return obj;
  }, {});
};

export default TextChannelSelector;
