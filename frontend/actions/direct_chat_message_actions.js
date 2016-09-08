export const DirectChatMessageConstants = {
  CREATE_DIRECT_CHAT_MESSAGE: 'CREATE_DIRECT_CHAT_MESSAGE',
  RECEIVE_ONE_DIRECT_CHAT_MESSAGE: 'RECEIVE_ONE_DIRECT_CHAT_MESSAGE',
  UPDATE_DIRECT_CHAT_MESSAGE: 'UPDATE_DIRECT_CHAT_MESSAGE',
  DESTROY_DIRECT_CHAT_MESSAGE: 'DESTROY_DIRECT_CHAT_MESSAGE'
}

export const createDirectChatMessage = directChatMessage => ({
  type: DirectChatMessageConstants.CREATE_DIRECT_CHAT_MESSAGE,
  directChatMessage
})

export const receiveOneDirectChatMessage = directChatMessage => ({
  type: DirectChatMessageConstants.RECEIVE_ONE_DIRECT_CHAT_MESSAGE,
  directChatMessage
})

export const updateDirectChatMessage = directChatMessage => ({
  type: DirectChatMessageConstants.UPDATE_DIRECT_CHAT_MESSAGE,
  directChatMessage
})

export const destroyDirectChatMessage = directChatMessage => ({
  type: DirectChatMessageConstants.DESTROY_DIRECT_CHAT_MESSAGE,
  directChatMessage
})
