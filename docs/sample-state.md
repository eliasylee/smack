```json
{
  currentUser: {
    id: 1,
    username: "username",
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    createChannel: {errors: ["Title can't be blank"]}
  },
  channels: {
    1: {
      title: "ChannelTitle",
      description: "Channel description",
      creator_id: 1,
      userIds: [1],
      textChannels: [1]
    }
  },
  textChannels: {
    1: {
      title: "TextChannelTitle",
      description: "Text channel description",
      channel_id: 1,
      userIds: [1]
    }
  },
  chatLine: {
    1: {
      author_id: 1,
      body: "Hello, is anyone there?"
    },
    2: {
      author_id: 1,
      body: "I'm lonely :("
    }
  }
}
```
