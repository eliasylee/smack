export const TextChannelConstants = {
  FETCH_ONE_TEXT_CHANNEL: 'FETCH_ONE_TEXT_CHANNEL',
  CREATE_TEXT_CHANNEL: 'CREATE_TEXT_CHANNEL',
  RECEIVE_ONE_TEXT_CHANNEL: 'RECEIVE_ONE_TEXT_CHANNEL',
  RECEIVE_NEW_TEXT_CHANNEL: 'RECEIVE_NEW_TEXT_CHANNEL',
  UPDATE_TEXT_CHANNEL: 'UPDATE_TEXT_CHANNEL',
  DESTROY_TEXT_CHANNEL: 'DESTROY_TEXT_CHANNEL',
  RECEIVE_TEXT_CHANNEL_ERRORS: 'RECEIVE_TEXT_CHANNEL_ERRORS'
}

export const fetchOneTextChannel = (textChannel) => ({
  type: TextChannelConstants.FETCH_ONE_TEXT_CHANNEL,
  textChannel
})

export const receiveOneTextChannel = textChannel => ({
  type: TextChannelConstants.RECEIVE_ONE_TEXT_CHANNEL,
  textChannel
})

export const receiveNewTextChannel = textChannel => ({
  type: TextChannelConstants.RECEIVE_NEW_TEXT_CHANNEL,
  textChannel
})

export const createTextChannel = textChannel => ({
  type: TextChannelConstants.CREATE_TEXT_CHANNEL,
  textChannel
})

export const updateTextChannel = textChannel => ({
  type: TextChannelConstants.UPDATE_TEXT_CHANNEL,
  textChannel
})

export const destroyTextChannel = textChannel => ({
  type: TextChannelConstants.DESTROY_TEXT_CHANNEL,
  textChannel
})

export const receiveTextChannelErrors = errors => ({
  type: TextChannelConstants.RECEIVE_TEXT_CHANNEL_ERRORS,
  errors
})
