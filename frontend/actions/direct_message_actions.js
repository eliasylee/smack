export const DirectMessageConstants = {
  FETCH_ALL_DIRECT_MESSAGES: 'FETCH_ALL_DIRECT_MESSAGES',
  RECEIVE_ALL_DIRECT_MESSAGES: 'RECEIVE_ALL_DIRECT_MESSAGES',
  FETCH_ONE_DIRECT_MESSAGE: 'FETCH_ONE_DIRECT_MESSAGE',
  RECEIVE_ONE_DIRECT_MESSAGE: 'RECEIVE_ONE_DIRECT_MESSAGE',
  CREATE_DIRECT_MESSAGE: 'CREATE_DIRECT_MESSAGE',
  RECEIVE_NEW_DIRECT_MESSAGE: 'RECEIVE_NEW_DIRECT_MESSAGE'
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

export const receiveOneDirectMessage = directMessages => ({
  type: DirectMessageConstants.RECEIVE_ONE_DIRECT_MESSAGE,
  directMessages
})

export const createDirectMessage = directMessage => ({
  type: DirectMessageConstants.CREATE_DIRECT_MESSAGE,
  directMessage
})

export const receiveNewDirectMessage = directMessage => ({
  type: DirectMessageConstants.RECEIVE_NEW_DIRECT_MESSAGE,
  directMessage
})
