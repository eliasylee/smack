export const ChannelConstants = {
  FETCH_ALL_CHANNELS: 'FETCH_ALL_CHANNELS',
  RECEIVE_ALL_CHANNELS: 'RECEIVE_ALL_CHANNELS',
  FETCH_ONE_CHANNEL: 'FETCH_ONE_CHANNEL',
  CREATE_CHANNEL: 'CREATE_CHANNEL',
  RECEIVE_ONE_CHANNEL: 'RECEIVE_ONE_CHANNEL',
  UPDATE_CHANNEL: 'UPDATE_CHANNEL',
  DESTROY_CHANNEL: 'DESTROY_CHANNEL',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
}

export const fetchAllChannels = () => ({
  type: ChannelConstants.FETCH_ALL_CHANNELS
})

export const receiveAllChannels = channels => ({
  type: ChannelConstants.RECEIVE_ALL_CHANNELS,
  channels
})

export const fetchOneChannel = () => ({
  type: ChannelConstants.FETCH_ONE_CHANNEL
})

export const receiveOneChannel = channel => ({
  type: ChannelConstants.RECEIVE_ONE_CHANNEL,
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

export const receiveErrors = errors => ({
  type: ChannelConstants.RECEIVE_ERRORS,
  errors
})
