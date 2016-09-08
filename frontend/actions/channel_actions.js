export const ChannelConstants = {
  FETCH_ALL_CHANNELS: 'FETCH_ALL_CHANNELS',
  RECEIVE_ALL_CHANNELS: 'RECEIVE_ALL_CHANNELS',
  FETCH_ONE_CHANNEL: 'FETCH_ONE_CHANNEL',
  CREATE_CHANNEL: 'CREATE_CHANNEL',
  RECEIVE_ONE_CHANNEL: 'RECEIVE_ONE_CHANNEL',
  RECEIVE_NEW_CHANNEL: 'RECEIVE_NEW_CHANNEL',
  UPDATE_CHANNEL: 'UPDATE_CHANNEL',
  DESTROY_CHANNEL: 'DESTROY_CHANNEL',
  DISMOUNT_CHANNEL: 'DISMOUNT_CHANNEL',
  CLEAR_TEXT_CHANNELS: 'CLEAR_TEXT_CHANNELS',
  RECEIVE_CHANNEL_ERRORS: 'RECEIVE_CHANNEL_ERRORS'
}

export const fetchAllChannels = () => ({
  type: ChannelConstants.FETCH_ALL_CHANNELS
})

export const receiveAllChannels = channels => ({
  type: ChannelConstants.RECEIVE_ALL_CHANNELS,
  channels
})

export const fetchOneChannel = channel => ({
  type: ChannelConstants.FETCH_ONE_CHANNEL,
  channel
})

export const receiveOneChannel = channel => ({
  type: ChannelConstants.RECEIVE_ONE_CHANNEL,
  channel
})

export const receiveNewChannel = channel => ({
  type: ChannelConstants.RECEIVE_NEW_CHANNEL,
  channel
})

export const createChannel = channel => ({
  type: ChannelConstants.CREATE_CHANNEL,
  channel
})

export const updateChannel = channel => ({
  type: ChannelConstants.UPDATE_CHANNEL,
  channel
})

export const destroyChannel = channel => ({
  type: ChannelConstants.DESTROY_CHANNEL,
  channel
})

export const dismountChannel = () => ({
  type: ChannelConstants.DISMOUNT_CHANNEL
})

export const clearTextChannels = () => ({
  type: ChannelConstants.CLEAR_TEXT_CHANNELS
})

export const receiveChannelErrors = errors => ({
  type: ChannelConstants.RECEIVE_CHANNEL_ERRORS,
  errors
})
