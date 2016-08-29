## Component Heirarchy

**FrontPageContainer**
  - FrontPage

**AuthFormContainer**
  - AuthForm

**ChannelNavContainer**
  - ChannelNavBar

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
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/channels/@me" | "MeChannelContainer" |
| "/channels/@me/:friendId" | "MeChannelContainer" |
| "/channels/:channelId/:textChannelId" | "ChannelContainer" |
