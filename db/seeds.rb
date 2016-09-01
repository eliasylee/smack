User.create!(username: "elias", password: "password")

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
