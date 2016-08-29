## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignUpForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `signIn`
  0. invoked from `SignInForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `signOut`
  0. invoked from `ChannelNavbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Channel Cycles

### Channels API Request Actions

* `fetchAllChannels`
  0. invoked from `ChannelIndex` `didMount`/`willReceiveProps`
  0. `GET /api/channels` is called.
  0. `receiveAllChannels` is set as the success callback.

* `createChannel`
  0. invoked from `ChannelIndex` new channel button `onClick`
  0. `POST /api/channels` is called.
  0. `receiveSingleChannel` is set as the success callback.

* `fetchSingleChannel`
  0. invoked from `ChannelIndex` `didMount`/`willReceiveProps`
  0. `GET /api/channels/:id` is called.
  0. `receiveSingleChannel` is set as the success callback.

* `updateChannel`
  0. invoked from `ChannelForm` `onSubmit`
  0. `POST /api/channels` is called.
  0. `receiveSingleChannel` is set as the success callback.

* `destroyChannel`
  0. invoked from delete channel button `onClick`
  0. `DELETE /api/channels/:id` is called.
  0. `removeChannel` is set as the success callback.

### Channels API Response Actions

* `receiveAllChannels`
  0. invoked from an API callback
  0. the `ChannelReducer` updates `channels` in the application's state.

* `receiveSingleChannel`
  0. invoked from an API callback
  0. the `ChannelReducer` updates `channel` in the application's state.

* `removeChannel`
  0. invoked from an API callback
  0. the `ChannelReducer` removes `channels[id]` from the application's state.

## TextChannels Cycles

### TextChannels API Request Actions

* `fetchAllTextChannels`
  0. invoked from `TextChannelsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/channels/:channelId/textChannels` is called.
  0. `receiveAllTextChannels` is set as the success callback.

* `createTextChannel`
  0. invoked from new textChannel button `onClick`
  0. `POST /api/channels/:channelId/textChannels` is called.
  0. `receiveSingleTextChannel` is set as the callback.

* `fetchSingleTextChannel`
  0. invoked from `TextChannelIndex` `didMount`/`willReceiveProps`
  0. `GET /api/channels/:channelId/textChannels/:id` is called.
  0. `receiveSingleTextChannel` is set as the success callback.

* `updateTextChannel`
  0. invoked from `TextChannelForm` `onSubmit`
  0. `POST /api/channels/:channelId/textChannels/:id` is called.
  0. `receiveSingleTextChannel` is set as the success callback.

* `destroyTextChannel`
  0. invoked from delete textChannel button `onClick`
  0. `DELETE /api/channels/:channelId/textChannels/:id` is called.
  0. `removeTextChannel` is set as the success callback.

### TextChannels API Response Actions

* `receiveAllTextChannels`
  0. invoked from an API callback.
  0. The `TextChannelReducer` updates `textChannels` in the application's state.

* `receiveSingleTextChannel`
  0. invoked from an API callback.
  0. The `TextChannelReducer` updates `textChannel` in the application's state.

* `removeTextChannel`
  0. invoked from an API callback.
  0. The `TextChannelReducer` removes `textChannels[id]` from the application's state.

## DirectMessages Cycles

### DirectMessages API Request Actions

* `fetchAllDirectMessages`
  0. invoked from `DirectMessagesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/me/directMessages` is called.
  0. `receiveAllDirectMessages` is set as the success callback.

* `createDirectMessage`
  0. invoked from new DirectMessage button `onClick`
  0. `POST /api/me/directMessages` is called.
  0. `receiveSingleDirectMessage` is set as the callback.

* `fetchSingleDirectMessage`
  0. invoked from `DirectMessageIndex` `didMount`/`willReceiveProps`
  0. `GET /api/me/directMessages/:id` is called.
  0. `receiveSingleDirectMessage` is set as the success callback.

* `updateDirectMessage`
  0. invoked from `DirectMessageForm` `onSubmit`
  0. `POST /api/me/directMessages/:id` is called.
  0. `receiveSingleDirectMessage` is set as the success callback.

* `destroyDirectMessage`
  0. invoked from delete DirectMessage button `onClick`
  0. `DELETE /api/me/directMessages/:id` is called.
  0. `removeDirectMessage` is set as the success callback.

### DirectMessages API Response Actions

* `receiveAllDirectMessages`
  0. invoked from an API callback.
  0. The `DirectMessageReducer` updates `directMessages` in the application's state.

* `receiveSingleDirectMessage`
  0. invoked from an API callback.
  0. The `DirectMessageReducer` updates `directMessage` in the application's state.

* `removeDirectMessage`
  0. invoked from an API callback.
  0. The `DirectMessageReducer` removes `directMessages[id]` from the application's state.

## ChatLines Cycles

### ChatLines API Request Actions

* `fetchAllChatLines`
  0. invoked from `ChatLinesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/chatLines` is called.
  0. `receiveAllChatLines` is set as the success callback.

* `createChatLine`
  0. invoked from new ChatLine button `onClick`
  0. `POST /api/chatLines` is called.
  0. `receiveSingleChatLine` is set as the callback.

* `updateChatLine`
  0. invoked from `ChatLineForm` `onSubmit`
  0. `POST /api/chatLines/:id` is called.
  0. `receiveSingleChatLine` is set as the success callback.

* `destroyChatLine`
  0. invoked from delete ChatLine button `onClick`
  0. `DELETE /api/chatLines/:id` is called.
  0. `removeChatLine` is set as the success callback.

### ChatLines API Response Actions

* `receiveAllChatLines`
  0. invoked from an API callback.
  0. The `ChatLineReducer` updates `chatLines` in the application's state.

* `receiveSingleChatLine`
  0. invoked from an API callback.
  0. The `ChatLineReducer` updates `chatLines[id]` in the application's state.

* `removeChatLine`
  0. invoked from an API callback.
  0. The `ChatLineReducer` removes `chatLines[id]` from the application's state.

## Friends Cycles

### Friends API Request Actions

* `fetchAllFriends`
  0. invoked from `FriendsListIndex` `didMount`/`willReceiveProps`
  0. `GET /api/me/friends` is called.
  0. `receiveAllFriends` is set as the success callback.

* `fetchSingleFriend`
  0. invoked from `FriendsListIndex` `didMount`/`willReceiveProps`
  0. `GET /api/me/friends/:id` is called.
  0. `receiveSingleFriend` is set as the success callback.

* `destroyFriend`
  0. invoked from delete friend button `onClick`
  0. `DELETE /api/me/friends/:id` is called.
  0. `removeFriend` is set as the success callback.

### Friends API Response Actions

* `receiveAllFriends`
  0. invoked from an API callback.
  0. The `FriendReducer` updated `friends` in the application's state.

* `receiveSingleFriend`
  0. invoked from an API callback.
  0. The `FriendReducer` removes `friends[id]` from the application's state.

* `removeFriend`
  0. invoked from an API callback.
  0. The `FriendReducer` removes `friends[id]` from the application's state.
