export const MessageConstants = {
  CREATE_MESSAGE: 'CREATE_MESSAGE',
  RECEIVE_ONE_MESSAGE: 'RECEIVE_ONE_MESSAGE',
  UPDATE_MESSAGE: 'UPDATE_MESSAGE',
  DESTROY_MESSAGE: 'DESTROY_MESSAGE',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
}

export const createMessage = message => ({
  type: MessageConstants.CREATE_MESSAGE,
  message
})

export const receiveOneMessage = message => ({
  type: MessageConstants.RECEIVE_ONE_MESSAGE,
  message
})

export const updateMessage = message => ({
  type: MessageConstants.UPDATE_MESSAGE,
  message
})

export const destroyMessage = message => ({
  type: MessageConstants.DESTROY_MESSAGE,
  message
})

export const receiveErrors = errors => ({
  type: MessageConstants.RECEIVE_ERRORS,
  errors
})
