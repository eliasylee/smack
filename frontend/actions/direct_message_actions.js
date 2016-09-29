export const DirectMessageConstants = {
  FETCH_ALL_DIRECT_MESSAGES: 'FETCH_ALL_DIRECT_MESSAGES',
  RECEIVE_ALL_DIRECT_MESSAGES: 'RECEIVE_ALL_DIRECT_MESSAGES',
  FETCH_ONE_DIRECT_MESSAGE: 'FETCH_ONE_DIRECT_MESSAGE',
  RECEIVE_ONE_DIRECT_MESSAGE: 'RECEIVE_ONE_DIRECT_MESSAGE',
  CREATE_DIRECT_MESSAGE: 'CREATE_DIRECT_MESSAGE',
  RECEIVE_NEW_DIRECT_MESSAGE: 'RECEIVE_NEW_DIRECT_MESSAGE',
  DISMOUNT_DIRECT_MESSAGE: 'DISMOUNT_DIRECT_MESSAGE',
  RECEIVE_DIRECT_MESSAGE_ERRORS: 'RECEIVE_DIRECT_MESSAGE_ERRORS'
}

export const fetchAllDirectMessages = () => ({
  type: DirectMessageConstants.FETCH_ALL_DIRECT_MESSAGES
})

export const receiveAllDirectMessages = directMessages => ({
  type: DirectMessageConstants.RECEIVE_ALL_DIRECT_MESSAGES,
  directMessages
})

export const fetchOneDirectMessage = directMessage => ({
  type: DirectMessageConstants.FETCH_ONE_DIRECT_MESSAGE,
  directMessage
})

export const receiveOneDirectMessage = directMessage => ({
  type: DirectMessageConstants.RECEIVE_ONE_DIRECT_MESSAGE,
  directMessage
})

export const createDirectMessage = directMessage => ({
  type: DirectMessageConstants.CREATE_DIRECT_MESSAGE,
  directMessage
})

export const receiveNewDirectMessage = directMessage => ({
  type: DirectMessageConstants.RECEIVE_NEW_DIRECT_MESSAGE,
  directMessage
})

export const dismountDirectMessage = () => ({
  type: DirectMessageConstants.DISMOUNT_DIRECT_MESSAGE
})

export const receiveDirectMessageErrors = errors => ({
  type: DirectMessageConstants.RECEIVE_DIRECT_MESSAGE_ERRORS,
  errors
})
