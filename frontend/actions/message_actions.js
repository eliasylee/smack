export const MessageConstants = {
  CREATE_MESSAGE: 'CREATE_MESSAGE',
  RECEIVE_ONE_MESSAGE: 'RECEIVE_ONE_MESSAGE',
  UPDATE_MESSAGE: 'UPDATE_MESSAGE',
  DESTROY_MESSAGE: 'DESTROY_MESSAGE',
  CLEAR_TEXT_MESSAGES: 'CLEAR_TEXT_MESSAGES',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
}

export const createMessage = channel => ({
  type: MessageConstants.CREATE_MESSAGE,
  channel
})

export const receiveOneMessage = channel => ({
  type: MessageConstants.RECEIVE_ONE_MESSAGE,
  channel
})

export const updateMessage = channel => ({
  type: MessageConstants.UPDATE_MESSAGE,
  channel
})

export const destroyMessage = channel => ({
  type: MessageConstants.DESTROY_MESSAGE,
  channel
})

export const clearTextMessages = () => ({
  type: MessageConstants.CLEAR_TEXT_MESSAGES
})

export const receiveErrors = errors => ({
  type: MessageConstants.RECEIVE_ERRORS,
  errors
})
