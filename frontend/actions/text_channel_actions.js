export const TextChannelConstants = {
  FETCH_ONE_TEXT_CHANNEL: 'FETCH_ONE_TEXT_CHANNEL',
  CREATE_TEXT_CHANNEL: 'CREATE_TEXT_CHANNEL',
  RECEIVE_ONE_TEXT_CHANNEL: 'RECEIVE_ONE_TEXT_CHANNEL',
  UPDATE_TEXT_CHANNEL: 'UPDATE_TEXT_CHANNEL',
  DESTROY_TEXT_CHANNEL: 'DESTROY_TEXT_CHANNEL',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
}

export const fetchOneTextChannel = () => ({
  type: TextChannelConstants.FETCH_ONE_TEXT_CHANNEL
})

export const receiveOneTextChannel = textChannel => ({
  type: TextChannelConstants.RECEIVE_ONE_TEXT_CHANNEL,
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

export const receiveErrors = errors => ({
  type: TextChannelConstants.RECEIVE_ERRORS,
  errors
})
