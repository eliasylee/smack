```json
{
  currentUser: {
    id: 1,
    username: "username",
    iconId: 1
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
      iconId: 2,
      userIds: [1],
      textChannels: [1]
    }
  },
  textChannels: {
    1: {
      title: "TextChannelTitle",
      description: "Text channel description",
      channel_id: 1,
      userIds: [1],
      chatLines: [1, 2]
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
  },
  icons: {
    1: {
      url: "http://imghostingsite.com/HaikuEsqueUrl"
    },
    2: {
      url: "http://imghostingsite.com/AnotherHaikuCool"
    }
  }
}
```
