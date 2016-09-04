User.create!(username: "Welcome!", password: "39cn109283e01wjc1owhd10v10wmdjskanlkaj0dw19x1")
User.create!(username: "guest", password: "password")

Channel.create!(admin_id: 2, title: "Smash", description: "Get smashed", icon_url: "https://www.facebookbrand.com/img/fb-art.jpg")
Channel.create!(admin_id: 2, title: "Starcraft", description: "4 pool gg no re", icon_url: "http://s.jtvnw.net/jtv_user_pictures/hosted_images/GlitchIcon_WhiteonPurple.png")
Channel.create!(admin_id: 2, title: "Counter-Strike", description: "boom headshot", icon_url: "http://accs123.com/wp-content/uploads/gmail-logo-1-01.png")
Channel.create!(admin_id: 2, title: "fremont", description: "play of the game: bastion", icon_url: "https://pbs.twimg.com/profile_images/418740478109298688/02jAQDv3.jpeg")

TextChannel.create!(channel_id: 1, title: "general")
TextChannel.create!(channel_id: 2, title: "general")
TextChannel.create!(channel_id: 3, title: "general")
TextChannel.create!(channel_id: 4, title: "general")

TextChannel.create!(channel_id: 1, title: "replayshare", description: "share replays and help analyze")
TextChannel.create!(channel_id: 1, title: "discussions", description: "talk about the game")
TextChannel.create!(channel_id: 1, title: "lfscrims", description: "look for/set up scrims")
TextChannel.create!(channel_id: 1, title: "chill", description: "relax and chat about anything")

TextChannel.create!(channel_id: 2, title: "bns", description: "anything bns related")
TextChannel.create!(channel_id: 2, title: "master-x-master", description: "1v1 chat for pros only")

TextChannel.create!(channel_id: 3, title: "announcements", description: "important announcement go here")
TextChannel.create!(channel_id: 3, title: "pick-up", description: "pick-up games, any level accepted")
TextChannel.create!(channel_id: 3, title: "scrims", description: "plan scrims here")

TextChannel.create!(channel_id: 4, title: "chingus", description: "No nugus here")
TextChannel.create!(channel_id: 4, title: "bamf", description: "For Chairleague specific chat")
TextChannel.create!(channel_id: 4, title: "overwatch", description: "RYU GA WAGA TEKI WO KURAU!")
TextChannel.create!(channel_id: 4, title: "smash", description: "ask chat if interested in setting up netplay")
TextChannel.create!(channel_id: 4, title: "brybotland", description: "bot testing channel")
TextChannel.create!(channel_id: 4, title: "music", description: "post and share music links here!")

Message.create!(author_id: 1, body: "This is the beginning of the #replayshare channel.", chatable_id: 1, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #discussions channel.", chatable_id: 2, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #lfscrims channel.", chatable_id: 3, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #chill channel.", chatable_id: 4, chatable_type: "TextChannel")

Message.create!(author_id: 1, body: "This is the beginning of the #bns channel.", chatable_id: 5, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #master-x-master channel.", chatable_id: 6, chatable_type: "TextChannel")

Message.create!(author_id: 1, body: "This is the beginning of the #announcements channel.", chatable_id: 7, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #pick-up channel.", chatable_id: 8, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #scrims channel.", chatable_id: 9, chatable_type: "TextChannel")

Message.create!(author_id: 1, body: "This is the beginning of the #chingus channel.", chatable_id: 10, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #bamf channel.", chatable_id: 11, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #overwatch channel.", chatable_id: 12, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #smash channel.", chatable_id: 13, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #brybotland channel.", chatable_id: 14, chatable_type: "TextChannel")
Message.create!(author_id: 1, body: "This is the beginning of the #music channel.", chatable_id: 15, chatable_type: "TextChannel")

Message.create!(author_id: 2, body: "hello", chatable_type: "TextChannel", chatable_id: 1)
Message.create!(author_id: 2, body: "i'm new here", chatable_type: "TextChannel", chatable_id: 1)
Message.create!(author_id: 2, body: "can anyone help me with these replays?", chatable_type: "TextChannel", chatable_id: 1)
Message.create!(author_id: 2, body: "any advice is appreciated", chatable_type: "TextChannel", chatable_id: 1)

Message.create!(author_id: 2, body: "anyone want to 1v1?", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 2, body: "i'm also down for 2v2 or 3v3", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 2, body: "but no bots", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 2, body: "and I'm trying to hit gold so no noobs", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 2, body: "need to farm those zen beans too", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 2, body: "1v1????", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 2, body: "anyone?", chatable_type: "TextChannel", chatable_id: 5)
Message.create!(author_id: 2, body: "this chat is dead", chatable_type: "TextChannel", chatable_id: 5)

Message.create!(author_id: 2, body: "hey", chatable_type: "TextChannel", chatable_id: 11)
Message.create!(author_id: 2, body: "we have 5 on", chatable_type: "TextChannel", chatable_id: 11)
Message.create!(author_id: 2, body: "get on everyone", chatable_type: "TextChannel", chatable_id: 11)

Message.create!(author_id: 2, body: "hey everyone my team is ready to scrim whenever", chatable_type: "TextChannel", chatable_id: 9)
Message.create!(author_id: 2, body: "we're about 1.5k average hotslog mmr", chatable_type: "TextChannel", chatable_id: 9)
Message.create!(author_id: 2, body: "but we don't mind playing against people much better", chatable_type: "TextChannel", chatable_id: 9)
Message.create!(author_id: 2, body: "even if you're worse that's okay", chatable_type: "TextChannel", chatable_id: 9)
Message.create!(author_id: 2, body: "we'll be on just pm me", chatable_type: "TextChannel", chatable_id: 9)
