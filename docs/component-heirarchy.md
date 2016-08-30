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

**MessagesContainer**
  - MessagesIndex

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

|Path                                   | Component            |
|---------------------------------------|----------------------|
| "/"                                   | "FrontPageContainer" |
| "/signUp"                             | "AuthFormContainer"  |
| "/signIn"                             | "AuthFormContainer"  |
| "/channels/me"                        | "MeChannelContainer" |
| "/channels/me/:messageId"             | "MeChannelContainer" |
| "/channels/me/friends"                | "FriendListContainer"|
| "/channels/me/friends/:id"            | "MessagesContainer"  |
| "/channels/:channelId/:textChannelId" | "ChannelContainer"   |
