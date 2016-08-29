## Component Heirarchy

**FrontPageContainer**
  - FrontPage

**AuthFormContainer**
  - AuthForm

**ChannelNavContainer**
  - ChannelNavBar
    + ChannelIndex

**MeChannelContainer**
  + DirectMessageContainer
  + FriendListContainer
  + ChatContainer

**DirectMessageContainer**
  - DirectMessageIndex

**FriendListContainer**
  - FriendListIndex

**ChannelContainer**
  + TextChannelContainer
  + ChatContainer
  + TextChannelUsersContainer

**TextChannelContainer**
  - TextChannelIndex

**ChatContainer**
  - ChatIndex

**TextChannelUsersContainer**
  - TextChannelUsersIndex

**ChannelFormContainer**
  - ChannelForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/frontpage" | "FrontPageContainer"
| "/signUp" | "AuthFormContainer" |
| "/signIn" | "AuthFormContainer" |
| "/channels/me" | "MeChannelContainer" |
| "/channels/me/:friendId" | "MeChannelContainer" |
| "/channels/:channelId/:textChannelId" | "ChannelContainer" |
