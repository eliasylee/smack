```json
{
  currentUser: {
    id: 1,
    iconUrl: "http://imghostingsite.com/HaikuEsqueUrl",
    username: "username",
    iconId: 1
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    createChannel: {errors: ["Title can't be blank"]}
  },
  channel: {
    id: 1,
    iconUrl: "http://imghostingsite.com/AnotherHaikuCool"
    title: "ChannelTitle",
    description: "Channel description",
    creator_id: 1,
    iconId: 2,
    userIds: [1],
    textChannelIds: [1]
  },
  textChannel: {
    id: 1,
    title: "TextChannelTitle",
    description: "Text channel description",
    channel_id: 1,
    userIds: [1],
    chatLines: [1, 2]
  },
  directMessage: {
    id: 1,
    title: "DirectMessageTitle",
    userIds: [1, 2],
    chatLines: []
  }
  chatLines: {
    1: {
      author_id: 1,
      body: "Hello, is anyone there?"
    },
    2: {
      author_id: 1,
      body: "I'm lonely :("
    }
  },
  channels: {
    channelIds: [1]
  },
  textChannels: {
    textChannelIds: [1]
  },
  friends: {
    friendIds: [2]
  },
  directMessages: {
    directMessageIds: [1]
  }
}
```
