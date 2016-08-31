```json
{
  current_user: {
    id: 1,
    iconUrl: "http://imghostingsite.com/HaikuEsqueUrl",
    username: "username",
7  },
  forms: {
    signup: {errors: []},
    login: {errors: []},
    createChannel: {errors: ["Title can't be blank"]}
  },
  channel: {
    id: 1,
    iconUrl: "http://imghostingsite.com/AnotherHaikuCool"
    title: "ChannelTitle",
    description: "Channel description",
    creator_id: 1,
  },
  chat_channel: {
    id: 1,
    title: "TextChannelTitle",
    description: "Text channel description",
    channel_id: 1,
  },
  direct_chat:{
    id: 1,
    user_id_one: 1,
    user_id_two: 2
  },
  messages: {
    1: {
      author_id: 1,
      body: "Hello, is anyone there?",
      chatable_type: "text_channel",
      chatable_id: 1
    },
    2: {
      author_id: 1,
      body: "I'm lonely :("
      chatable_type: "text_channel",
      chatable_id: 1
    }
  },
  subscriptions: {
    channel_ids: [1]
  },
  text_channels: {
    text_channel_ids: [1]
  },
  friends: {
    1: {
      id: 2,
      iconUrl: "",
      username: "second_username",
    }
  }
}
```
