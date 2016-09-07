isActive () {
  const { router } = this.props;
  let path = router.path;
  if ( path.slice(path.length - 3, path.length) === "@me" ) {
    return "activeMeChannelButton";
  } else {
    return "inactiveMeChannelButton";
  }
};

isDisabled () {
  const { router } = this.props;
  let path = router.path;
  if ( path.slice(path.length - 3, path.length) === "@me" ) {
    return "disabled";
  } else {
    return "";
  }
};


User.create!(username: "Welcome!", password: "39cn109283e01wjc1owhd10v10wmdjskanlkaj0dw19x1")
User.create!(username: "guest", password: "password")
User.create!(username: "Sunny", password: "efijo[wfieja[odif]]")
User.create!(username: "Bryan792", password: "asdfadf")
User.create!(username: "max", password: "pas1923r0sword")
User.create!(username: "vect", password: "1iohf1c0293ndru901")
User.create!(username: "AndyEskimo", password: "12039den1209ineu1on")
User.create!(username: "Silkwood", password: "x193n4rc189n3")
User.create!(username: "trollinh", password: "12iowjedn1xlkemdo")
User.create!(username: "Hungrypie", password: "v31oiuvn1peonvp1")
User.create!(username: "yuki", password: "dejkcalkjdlfc")
User.create!(username: "torinro", password: "1v2904nv10298vn1")
User.create!(username: "Superjova", password: "efijo[wfieja[odif]]")
User.create!(username: "ArgMikey|Pengwins", password: "asdfadf")
User.create!(username: "Aerinyes", password: "pas1923r0sword")
User.create!(username: "Sydor", password: "1iohf1c0293ndru901")
User.create!(username: "CorgiBooty", password: "12039den1209ineu1on")
User.create!(username: "Starwood", password: "x193n4rc189n3")
User.create!(username: "CavalierGuest", password: "12iowjedn1xlkemdo")
User.create!(username: "chronation", password: "efijo[wfieja[odif]]")
User.create!(username: "DemonicRabbit", password: "asdfadf")
User.create!(username: "KamePLS", password: "pas1923r0sword")
User.create!(username: "diverges", password: "1iohf1c0293ndru901")
User.create!(username: "AfricaLionSafari", password: "12039den1209ineu1on")
User.create!(username: "bottomlessfries", password: "x193n4rc189n3")
User.create!(username: "Tom the Tomato", password: "12iowjedn1xlkemdo")
User.create!(username: "CavalierGuest", password: "efijo[wfieja[odif]]")
User.create!(username: "EKevin", password: "asdfadf")
User.create!(username: "Oddish", password: "pas1923r0sword")
User.create!(username: "Blades", password: "1iohf1c0293ndru901")
User.create!(username: "rentaro", password: "12039den1209ineu1on")
User.create!(username: "l2ival", password: "12iowjedn1xlkemdo")
User.create!(username: "Fain", password: "12iowjedn1xlkemdo")
User.create!(username: "Aryssalis", password: "efijo[wfieja[odif]]")
User.create!(username: "KNIP", password: "asdfadf")
User.create!(username: "Blackstabath", password: "pas1923r0sword")
User.create!(username: "show7ime", password: "1iohf1c0293ndru901")
User.create!(username: "Remiflan", password: "12039den1209ineu1on")
User.create!(username: "milkNcookies", password: "x193n4rc189n3")
User.create!(username: "Arty1901", password: "12iowjedn1xlkemdo")

Channel.create!(admin_id: 2, title: "fremont", description: "", icon_url: "https://cdn.discordapp.com/icons/91722996300943360/fd7a1d84d586eaba09e0a38e0c5280ed.jpg")
Channel.create!(admin_id: 13, title: "Chairleague", description: "", icon_url: "https://cdn.discordapp.com/icons/134600616818245633/7f4257ed06f6e5ae80622e7816e91489.jpg")
Channel.create!(admin_id: 20, title: "Veggie Tales", description: "", icon_url: "https://cdn.discordapp.com/icons/152604801484455936/2fc30d67d9db688a36c3cb0f17143683.jpg")
Channel.create!(admin_id: 27, title: "Educational Scrims", description: "", icon_url: "")
Channel.create!(admin_id: 34, title: "TSM", description: "", icon_url: "http://www.esports-betting.pro/wp-content/uploads/2014/05/Logo-of-LCS-NA-Summer-Split-Team-TSM-64.png")

Subscription.create!(user_id: 2, channel_id: 1)
Subscription.create!(user_id: 2, channel_id: 2)
Subscription.create!(user_id: 2, channel_id: 3)
Subscription.create!(user_id: 2, channel_id: 4)
Subscription.create!(user_id: 2, channel_id: 5)

Subscription.create!(user_id: 3, channel_id: 1)
Subscription.create!(user_id: 4, channel_id: 1)
Subscription.create!(user_id: 5, channel_id: 1)
Subscription.create!(user_id: 6, channel_id: 1)
Subscription.create!(user_id: 7, channel_id: 1)
Subscription.create!(user_id: 8, channel_id: 1)
Subscription.create!(user_id: 9, channel_id: 1)
Subscription.create!(user_id: 10, channel_id: 1)
Subscription.create!(user_id: 11, channel_id: 1)
Subscription.create!(user_id: 12, channel_id: 1)

Subscription.create!(user_id: 13, channel_id: 2)
Subscription.create!(user_id: 14, channel_id: 2)
Subscription.create!(user_id: 15, channel_id: 2)
Subscription.create!(user_id: 16, channel_id: 2)
Subscription.create!(user_id: 17, channel_id: 2)
Subscription.create!(user_id: 18, channel_id: 2)
Subscription.create!(user_id: 19, channel_id: 2)

Subscription.create!(user_id: 20, channel_id: 3)
Subscription.create!(user_id: 21, channel_id: 3)
Subscription.create!(user_id: 22, channel_id: 3)
Subscription.create!(user_id: 23, channel_id: 3)
Subscription.create!(user_id: 24, channel_id: 3)
Subscription.create!(user_id: 25, channel_id: 3)
Subscription.create!(user_id: 26, channel_id: 3)

Subscription.create!(user_id: 27, channel_id: 4)
Subscription.create!(user_id: 28, channel_id: 4)
Subscription.create!(user_id: 29, channel_id: 4)
Subscription.create!(user_id: 30, channel_id: 4)
Subscription.create!(user_id: 31, channel_id: 4)
Subscription.create!(user_id: 32, channel_id: 4)
Subscription.create!(user_id: 33, channel_id: 4)

Subscription.create!(user_id: 34, channel_id: 5)
Subscription.create!(user_id: 35, channel_id: 5)
Subscription.create!(user_id: 36, channel_id: 5)
Subscription.create!(user_id: 37, channel_id: 5)
Subscription.create!(user_id: 38, channel_id: 5)
Subscription.create!(user_id: 39, channel_id: 5)
Subscription.create!(user_id: 40, channel_id: 5)

TextChannel.create!(channel_id: 1, title: "general")
Message.create!(author_id: 1, body: "This is the beginning of the #general channel.", chatable_id: 1, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 1, title: "chingus")
Message.create!(author_id: 1, body: "This is the beginning of the #chingus channel.", chatable_id: 2, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 1, title: "bamf")
Message.create!(author_id: 1, body: "This is the beginning of the #bamf channel.", chatable_id: 3, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 1, title: "overwatch")
Message.create!(author_id: 1, body: "This is the beginning of the #overwatch channel.", chatable_id: 4, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 1, title: "smash")
Message.create!(author_id: 1, body: "This is the beginning of the #smash channel.", chatable_id: 5, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 1, title: "brybotland")
Message.create!(author_id: 1, body: "This is the beginning of the #brybotland channel.", chatable_id: 6, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 1, title: "meow")
Message.create!(author_id: 1, body: "This is the beginning of the #meow channel.", chatable_id: 7, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 1, title: "music")
Message.create!(author_id: 1, body: "This is the beginning of the #music channel.", chatable_id: 8, chatable_type: "TextChannel")

TextChannel.create!(channel_id: 2, title: "general")
Message.create!(author_id: 1, body: "This is the beginning of the #general channel.", chatable_id: 9, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 2, title: "welcome")
Message.create!(author_id: 1, body: "This is the beginning of the #welcome channel.", chatable_id: 10, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 2, title: "registration")
Message.create!(author_id: 1, body: "This is the beginning of the #registration channel.", chatable_id: 11, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 2, title: "announcements")
Message.create!(author_id: 1, body: "This is the beginning of the #announcements channel.", chatable_id: 12, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 2, title: "looking4casters")
Message.create!(author_id: 1, body: "This is the beginning of the #looking4casters channel.", chatable_id: 13, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 2, title: "scrims")
Message.create!(author_id: 1, body: "This is the beginning of the #scrims channel.", chatable_id: 14, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 2, title: "pick-up")
Message.create!(author_id: 1, body: "This is the beginning of the #pick-up channel.", chatable_id: 15, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 2, title: "service-desk")
Message.create!(author_id: 1, body: "This is the beginning of the #service-desk channel.", chatable_id: 16, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 2, title: "free-agents")
Message.create!(author_id: 1, body: "This is the beginning of the #free-agents channel.", chatable_id: 17, chatable_type: "TextChannel")

TextChannel.create!(channel_id: 3, title: "general")
Message.create!(author_id: 1, body: "This is the beginning of the #general channel.", chatable_id: 18, chatable_type: "TextChannel")

TextChannel.create!(channel_id: 4, title: "general")
Message.create!(author_id: 1, body: "This is the beginning of the #general channel.", chatable_id: 19, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 4, title: "replayshare")
Message.create!(author_id: 1, body: "This is the beginning of the #replayshare channel.", chatable_id: 20, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 4, title: "discussionarea")
Message.create!(author_id: 1, body: "This is the beginning of the #discussionarea channel.", chatable_id: 21, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 4, title: "lfscrims")
Message.create!(author_id: 1, body: "This is the beginning of the #lfscrims channel.", chatable_id: 22, chatable_type: "TextChannel")
TextChannel.create!(channel_id: 4, title: "tournamentdiscussion")
Message.create!(author_id: 1, body: "This is the beginning of the #tournamentdiscussion channel.", chatable_id: 23, chatable_type: "TextChannel")

TextChannel.create!(channel_id: 5, title: "general")
Message.create!(author_id: 1, body: "This is the beginning of the #general channel.", chatable_id: 24, chatable_type: "TextChannel")
