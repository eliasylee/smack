```json
{
  current_user: {
    id: 1,
    username: "username",
    friends: [
      { id: 2,
        iconUrl: "",
        username: "second_username",
      }
    ],
    direct_messages: [
      { id: 1,
        user_id_one: 1,
        user_id_two: 2,
        messages: [
          { author_id: 1,
            author_username: "username",
            body: "Hi!",
          }, {
            author_id: 1,
            author_username: "username",
            body: "!!!"
          }
        ]
      }
    ],
  },
  channels: [
    { id: 1,
      title: "Channel Title",
      icon_url: "http://imghostingsite.com/AnotherHaikuCool"
    }
  ],
  channel: {
    id: 1,
    iconUrl: "http://imghostingsite.com/AnotherHaikuCool"
    title: "ChannelTitle",
    description: "Channel description",
    text_channels: [
      {
        id: 1,
        title: "TextChannelTitle",
        description: "Text channel description"
      },
      {
        id: 2,
        title: "YetAnotherTextChannel",
        description: "Second text channel"
      }
    ]
  },
  text_channel: [
    { id: 1,
      title: "TextChannelTitle",
      description: "Text channel description",
      messages: [
        1: { id: 1,
             author_id: 1,
             author_username: "username",
             body: "Hello, is anyone there?"
        },
        2: { id: 2,
             author_id: 1,
             author_username: "username",
             body: "I'm lonely :("
        }
      ]
    }
  ],

  errors: []
}
```
