```json
{
  current_user: {
    id: 1,
    iconUrl: "http://imghostingsite.com/HaikuEsqueUrl",
    username: "username"
  },
  friends: {
    1: {
      id: 2,
      iconUrl: "",
      username: "second_username",
    }
  },
  channels: {
    1: {
      id: 1,
      iconUrl: "http://imghostingsite.com/AnotherHaikuCool"
      title: "ChannelTitle",
      description: "Channel description"
    }
  },
  text_channels: {
    1: {
      id: 1,
      title: "TextChannelTitle",
      description: "Text channel description"
    }
  },
  direct_message:{
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
  }
}
```
