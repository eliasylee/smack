const ChannelSelector = (channels) => {
  return channels.reduce( (obj, channel) => {
    obj[channel.id] = channel;
    return obj;
  }, {});
};

export default ChannelSelector;
