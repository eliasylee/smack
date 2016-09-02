User.create!(username: "guest", password: "password")

Channel.create!(admin_id: 1, title: "Smash", description: "Get smashed", icon_url: "https://www.facebookbrand.com/img/fb-art.jpg")
Channel.create!(admin_id: 1, title: "Starcraft", description: "4 pool gg no re", icon_url: "http://s.jtvnw.net/jtv_user_pictures/hosted_images/GlitchIcon_WhiteonPurple.png")
Channel.create!(admin_id: 1, title: "Counter-Strike", description: "boom headshot", icon_url: "http://accs123.com/wp-content/uploads/gmail-logo-1-01.png")
Channel.create!(admin_id: 1, title: "fremont", description: "play of the game: bastion", icon_url: "https://pbs.twimg.com/profile_images/418740478109298688/02jAQDv3.jpeg")

TextChannel.create!(channel_id: 1, title: "replayshare", description: "")
TextChannel.create!(channel_id: 1, title: "discussions", description: "")
TextChannel.create!(channel_id: 1, title: "lfscrims", description: "")
TextChannel.create!(channel_id: 1, title: "chill", description: "")

TextChannel.create!(channel_id: 2, title: "bns", description: "")
TextChannel.create!(channel_id: 2, title: "master-x-master", description: "")

TextChannel.create!(channel_id: 3, title: "announcements", description: "")
TextChannel.create!(channel_id: 3, title: "pick-up", description: "")
TextChannel.create!(channel_id: 3, title: "scrims", description: "")

TextChannel.create!(channel_id: 4, title: "chingus", description: "")
TextChannel.create!(channel_id: 4, title: "bamf", description: "")
TextChannel.create!(channel_id: 4, title: "overwatch", description: "")
TextChannel.create!(channel_id: 4, title: "smash", description: "")
TextChannel.create!(channel_id: 4, title: "brybotland", description: "")
TextChannel.create!(channel_id: 4, title: "music", description: "")

Message.create!(author_id: 1, body: "hello", chatable_type: "TextChannel", chatable_id: 1)
Message.create!(author_id: 1, body: "i'm new here", chatable_type: "TextChannel", chatable_id: 1)
Message.create!(author_id: 1, body: "can anyone help me with these replays?", chatable_type: "TextChannel", chatable_id: 1)
Message.create!(author_id: 1, body: "any advice is appreciated", chatable_type: "TextChannel", chatable_id: 1)

Message.create!(author_id: 1, body: "anyone want to 1v1?", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 1, body: "i'm also down for 2v2 or 3v3", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 1, body: "but no bots", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 1, body: "and I'm trying to hit gold so no noobs", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 1, body: "need to farm those zen beans too", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 1, body: "1v1????", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 1, body: "anyone?", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 1, body: "this chat is dead", chatable_type: "TextChannel", chatable_id: 5)

Message.create!(author_id: 1, body: "hey", chatable_type: "TextChannel", chatable_id: 11)
Message.create!(author_id: 1, body: "we have 5 on", chatable_type: "TextChannel", chatable_id: 11)
Message.create!(author_id: 1, body: "get on everyone", chatable_type: "TextChannel", chatable_id: 11)

Message.create!(author_id: 1, body: "hey everyone my team is ready to scrim whenever", chatable_type: "TextChannel", chatable_id: 9)
Message.create!(author_id: 1, body: "we're about 1.5k average hotslog mmr", chatable_type: "TextChannel", chatable_id: 9)
Message.create!(author_id: 1, body: "but we don't mind playing against people much better", chatable_type: "TextChannel", chatable_id: 9)
Message.create!(author_id: 1, body: "even if you're worse that's okay", chatable_type: "TextChannel", chatable_id: 9)
Message.create!(author_id: 1, body: "we'll be on just pm me", chatable_type: "TextChannel", chatable_id: 9)
