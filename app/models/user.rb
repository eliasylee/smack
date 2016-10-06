COLORS = [
  "E6544A",
  "FAA61A",
  "7289DA",
  "43B581",
  "593695",
  "992D22",
  "3498DB",
  "1F8B4C"
]

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, maximum: 20, allow_nil: true }
  validates :username, uniqueness: true

  after_initialize :ensure_session_token

  has_many :owned_channels,
    foreign_key: :admin_id

  has_many :subscriptions
  has_many :channels,
    through: :subscriptions

  has_many :text_channels,
    through: :channels,
    source: :text_channels

  has_many :written_messages,
    foreign_key: :author_id

  def direct_messages
    DirectMessage.where("speaker_id = ? OR listener_id = ?", self.id, self.id)
  end

  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64(32)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def self.random_color
    COLORS[rand(0..COLORS.length - 1)]
  end

  def self.create_guest_account!
    guest_number = nil

    loop do
      guest_number = rand(COLORS.length - 1)
      break unless User.find_by(username: "ShyGuy#{guest_number}")
    end

    User.create!(username: "ShyGuy#{guest_number}", password: "password", color: User.random_color)
    user = User.find_by_username("ShyGuy#{guest_number}")

    chan_1 = Channel.create!(admin_id: user.id, title: "fremont", description: "", icon_url: "https://cdn.discordapp.com/icons/91722996300943360/fd7a1d84d586eaba09e0a38e0c5280ed.jpg")
    chan_2 = Channel.create!(admin_id: 13, title: "Chairleague", description: "", icon_url: "https://cdn.discordapp.com/icons/134600616818245633/7f4257ed06f6e5ae80622e7816e91489.jpg")
    chan_3 = Channel.create!(admin_id: 19, title: "Educational Scrims", description: "", icon_url: "")

    Subscription.create!(user_id: user.id, channel_id: chan_1.id)
    Subscription.create!(user_id: 3, channel_id: chan_1.id)
    Subscription.create!(user_id: 4, channel_id: chan_1.id)
    Subscription.create!(user_id: 5, channel_id: chan_1.id)
    Subscription.create!(user_id: 6, channel_id: chan_1.id)
    Subscription.create!(user_id: 7, channel_id: chan_1.id)
    Subscription.create!(user_id: 8, channel_id: chan_1.id)
    Subscription.create!(user_id: 9, channel_id: chan_1.id)
    Subscription.create!(user_id: 10, channel_id: chan_1.id)
    Subscription.create!(user_id: 11, channel_id: chan_1.id)
    Subscription.create!(user_id: 12, channel_id: chan_1.id)

    Subscription.create!(user_id: 13, channel_id: chan_2.id)
    Subscription.create!(user_id: 14, channel_id: chan_2.id)
    Subscription.create!(user_id: 15, channel_id: chan_2.id)
    Subscription.create!(user_id: user.id, channel_id: chan_2.id)
    Subscription.create!(user_id: 16, channel_id: chan_2.id)
    Subscription.create!(user_id: 17, channel_id: chan_2.id)
    Subscription.create!(user_id: 18, channel_id: chan_2.id)

    Subscription.create!(user_id: 19, channel_id: chan_3.id)
    Subscription.create!(user_id: 19, channel_id: chan_2.id)
    Subscription.create!(user_id: 20, channel_id: chan_3.id)
    Subscription.create!(user_id: 21, channel_id: chan_3.id)
    Subscription.create!(user_id: user.id, channel_id: chan_3.id)
    Subscription.create!(user_id: 22, channel_id: chan_3.id)
    Subscription.create!(user_id: 23, channel_id: chan_3.id)
    Subscription.create!(user_id: 24, channel_id: chan_3.id)
    Subscription.create!(user_id: 25, channel_id: chan_3.id)

    txt_1 = TextChannel.create!(channel_id: chan_1.id, title: "general", description: "If you want to get added to a game (hots,ow) specific channel, ask @Sunny or @Bryan792")
    Message.create!(author_id: 1, body: "This is the beginning of the #general channel.", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "anyone else get a battlerite beta key?", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 8, body: "Please remember that you are not allowed to stream or share any footage of the game during the Beta.", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 8, body: "wat", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "yup", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 5, body: "what is this battlerite game", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 5, body: "it looks like another moba?", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "nah", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "arena brawler is the genre", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 5, body: "fun?", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "ya", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "i played 12 hrs in the first beta", chatable_id: txt_1.id, chatable_type: "TextChannel")
    Message.create!(author_id: 3, body: "nice i got the beta too", chatable_id: txt_1.id, chatable_type: "TextChannel")

    txt_2 = TextChannel.create!(channel_id: chan_1.id, title: "bamf", description: "For Chairleague specific chat")
    Message.create!(author_id: 1, body: "This is the beginning of the #bamf channel.", chatable_id: txt_2.id, chatable_type: "TextChannel")
    Message.create!(author_id: 9, body: "cant wait for the map", chatable_id: txt_2.id, chatable_type: "TextChannel")
    Message.create!(author_id: 9, body: "interesting mechanics", chatable_id: txt_2.id, chatable_type: "TextChannel")
    Message.create!(author_id: user.id, body: "Yesss finally new maps and finally starcraft", chatable_id: txt_2.id, chatable_type: "TextChannel")
    Message.create!(author_id: 11, body: "i love the maps", chatable_id: txt_2.id, chatable_type: "TextChannel")
    Message.create!(author_id: user.id, body: "did you try them in PTR?", chatable_id: txt_2.id, chatable_type: "TextChannel")

    txt_3 = TextChannel.create!(channel_id: chan_1.id, title: "overwatch", description: "🐉 🐉 🐉 RYU GA WAGA TEKI WO KURAU! 🐉 🐉 🐉")
    Message.create!(author_id: 1, body: "This is the beginning of the #overwatch channel.", chatable_id: txt_3.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "sabbsie you want to carry us?", chatable_id: txt_3.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "hah i dont have a mic right now", chatable_id: txt_3.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "but i can play comp after i eat maybeh", chatable_id: txt_3.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "k", chatable_id: txt_3.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "im here", chatable_id: txt_3.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "got placed in diamond barely", chatable_id: txt_3.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "woo", chatable_id: txt_3.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "nice", chatable_id: txt_3.id, chatable_type: "TextChannel")

    txt_4 = TextChannel.create!(channel_id: chan_1.id, title: "smash", description: "get smashed")
    Message.create!(author_id: 1, body: "This is the beginning of the #smash channel.", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "free for some smash before bed if anyone down", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "assuming it works", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "Sunny Shyguy ^ ?", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "bedtiem", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 3, body: "lol i only have keyboard D:", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: user.id, body: "buy an adapter already lol", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 3, body: "lol which one do you have?", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 3, body: "the mayflash one has decent reviews", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 10, body: "i use the official wiiu one", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "same", chatable_id: txt_4.id, chatable_type: "TextChannel")
    Message.create!(author_id: user.id, body: "yeah i'd get the official one if I were to buy one", chatable_id: txt_4.id, chatable_type: "TextChannel")

    txt_5 = TextChannel.create!(channel_id: chan_1.id, title: "music", description: "♬ ♪ ♫ Post and share music links here! ♫ ♪ ♬")
    Message.create!(author_id: 1, body: "This is the beginning of the #music channel.", chatable_id: txt_5.id, chatable_type: "TextChannel")
    Message.create!(author_id: 3, body: "https://soundcloud.com/madeinheights/slow-burn", chatable_id: txt_5.id, chatable_type: "TextChannel")
    Message.create!(author_id: 5, body: "hello", chatable_id: txt_5.id, chatable_type: "TextChannel")
    Message.create!(author_id: 4, body: "https://www.youtube.com/watch?v=023YrnoZlp4", chatable_id: txt_5.id, chatable_type: "TextChannel")
    Message.create!(author_id: user.id, body: "SO GOOD", chatable_id: txt_5.id, chatable_type: "TextChannel")

    txt_6 = TextChannel.create!(channel_id: chan_2.id, title: "general", description: "Regular discussion; hangout and talk about whatever you'd like!")
    Message.create!(author_id: 1, body: "This is the beginning of the #general channel.", chatable_id: txt_6.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "From what superjova was saying at the caster meeting.  The away team will now get map pick.  He did not say anything about selecting the map by a certain time/date so at this point I would assume that the home team will find out right before the game", chatable_id: txt_6.id, chatable_type: "TextChannel")
    Message.create!(author_id: 15, body: "So is there a method for selecting the map, or is this updated during draft?", chatable_id: txt_6.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "Im not sure.  That would be a question for superjova", chatable_id: txt_6.id, chatable_type: "TextChannel")
    Message.create!(author_id: 16, body: "it'll probably be in the rules update, hopefully", chatable_id: txt_6.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "superjova  Is HM officially a banned map pick?", chatable_id: txt_6.id, chatable_type: "TextChannel")
    Message.create!(author_id: 17, body: "Yea it's not listed in top drafter from what I recall.", chatable_id: txt_6.id, chatable_type: "TextChannel")

    txt_7 = TextChannel.create!(channel_id: chan_2.id, title: "registration", description: "Post in here to get your Discord Role! If you're a registered player, type Player. If you're an active caster, type Caster")
    Message.create!(author_id: 1, body: "This is the beginning of the #registration channel.", chatable_id: txt_7.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "Hi everyone ! I just want to make sure everyone is up to date with their proper Roles for Chair League as Season 3 draws closer.If you're a Player in the League this season, please just type Player and your division (ex Player 2).  If you're a Caster, please type Caster. If you are not involved in the league and just spectating, please type Spectator. You can include all roles in your message, and you will be given all proper permissions for each role! An Admin will grant you your Role, and then your message will be deleted. If you change teams mid season, or your team moves up a division, please just repeat this process! All other messages will be deleted. Thanks for your help!", chatable_id: txt_7.id, chatable_type: "TextChannel")

    txt_8 = TextChannel.create!(channel_id: chan_2.id, title: "announcements", description: "Stuff such as schedules, special games, or Chair League news will be posted to everyone here!")
    Message.create!(author_id: 1, body: "This is the beginning of the #announcements channel.", chatable_id: txt_8.id, chatable_type: "TextChannel")
    Message.create!(author_id: 17, body: "First game of Season 1 Finals is live and about to start! If you're not already watching, get on it! Shadow Brotherhood vs. Snipe Squad going to put on a great game!", chatable_id: txt_8.id, chatable_type: "TextChannel")
    Message.create!(author_id: 17, body: "Hey everyone! For any teams interested, there are Pro Division Open Qualifiers starting next week! Signups are open until 4:00PM PDT on Saturday, May 7, which will lead to the brackets starting soon after. So anybody who thinks they have the gusto to be among the best of Chair League, here's your chance!", chatable_id: txt_8.id, chatable_type: "TextChannel")
    Message.create!(author_id: 13, body: "thanks corgi!", chatable_id: txt_8.id, chatable_type: "TextChannel")

    txt_9 = TextChannel.create!(channel_id: chan_2.id, title: "looking4casters", description: "A place to find a Caster for your Match or Scrim and for Casters to post availability!")
    Message.create!(author_id: 1, body: "This is the beginning of the #looking4casters channel.", chatable_id: txt_9.id, chatable_type: "TextChannel")
    Message.create!(author_id: 18, body: "Hello pretty new to chair league and was looking for a caster for this up coming season.  If you are available and interested let me know, our schedule is mon,tues,thurs 6pm-9pm pdt.", chatable_id: txt_9.id, chatable_type: "TextChannel")

    txt_10 = TextChannel.create!(channel_id: chan_2.id, title: "scrims", description: "If you're looking for somebody to help scrim or fill in, post here. Or use the site's official scrim tool!")
    Message.create!(author_id: 1, body: "This is the beginning of the #scrims channel.", chatable_id: txt_10.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "Are you excited for Season 3 yet? If you need a little more motivation and practice to get ready for Sept 5th, then Schedule a Scrim this week! Find other teams in your own division to hone your skills or even higher divisions for the ultimate test! Make sure your team is in tip-top shape and ready for battle when Season 3 comes soon!™", chatable_id: txt_10.id, chatable_type: "TextChannel")

    txt_11 = TextChannel.create!(channel_id: chan_2.id, title: "pick-up", description: "Want to play some Hero/Team League with someone new or just hop in some Quick Match? Post here!")
    Message.create!(author_id: 1, body: "This is the beginning of the #pick-up channel.", chatable_id: txt_11.id, chatable_type: "TextChannel")
    Message.create!(author_id: 16, body: "Looking for a player that wants to play a Melee assassin role that is willing to flex to specialist when needed. PM me if interested.", chatable_id: txt_11.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "you should put an ad on the CL website in the forums, add an opening to your team, and also use #free-agents (this channel is for pick-up games)", chatable_id: txt_11.id, chatable_type: "TextChannel")

    txt_12 = TextChannel.create!(channel_id: chan_2.id, title: "service-desk", description: "If you need help with anything, post here and it'll get sorted right away.")
    Message.create!(author_id: 1, body: "This is the beginning of the #service-desk channel.", chatable_id: txt_12.id, chatable_type: "TextChannel")
    Message.create!(author_id: 15, body: "For the sake of subbing, players are limited to only playing on one team per week?  The rules simply say playing on multiple teams is cheating.", chatable_id: txt_12.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "I don't think there is anything that can be done to track subs for a team at this time. The 4/5 rule makes it so most of the team is composed of actual players of that team- and the fifth position is just open to anyone. As much as I agree with a player being able to be a sub once a week, I don't think there is a practical way to implement that.", chatable_id: txt_12.id, chatable_type: "TextChannel")
    Message.create!(author_id: 15, body: "Since the fifth doesn't need to be registered, I understand it would be incredibly difficult to track or enforce.  Definitely want to follow the rules and spirit of the rules though.", chatable_id: txt_12.id, chatable_type: "TextChannel")
    Message.create!(author_id: 15, body: "Eg.: I'm on a team, I play this week.  A friend's team only had 4 players and needs a fifth. If I sub in, thereby playing two games on two different teams, is that an issue?", chatable_id: txt_12.id, chatable_type: "TextChannel")
    Message.create!(author_id: 18, body: "how does it work if i need to sign on an alt account cause my main one doesnt own a hero? :^)", chatable_id: txt_12.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "you can have 2 Bnets listed for chairleague- just go to your profile and add it as a contact method (these can be public or private). In the sense of fairness, I would have them both listed as public so if there is ever a discrepency, a caster or opposing player can look at your profile and see your battletag as such.", chatable_id: txt_12.id, chatable_type: "TextChannel")
    Message.create!(author_id: 14, body: "you are not registered for 2 teams at that point. The 'sub' 5th can be anyone, but they will not be signing in to chair league to play- so no data will be recorded for them in your game- although it may be a small albeit rare issue, I don't think it would impact anything.", chatable_id: txt_12.id, chatable_type: "TextChannel")

    txt_13 = TextChannel.create!(channel_id: chan_3.id, title: "general", description: "welcome")
    Message.create!(author_id: 1, body: "This is the beginning of the #general channel.", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 25, body: "Strategy question: would it be worth skipping the first Infernal Shrines objective to soak and push the other two lanes?", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 25, body: "Since it takes so long and there is little value if you bait it over the wall correctly?", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 24, body: "Cavalierguest Can answer that best, because it's a very nuanced strategy and it depends heavily on team composition.", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "It makes sense if the enemy team doesn't have a sylv to make even the first immortal have some value.... because a sylv comp with the right pressure can run the first immortal to keep walls easily", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "But it's definitely not a call you can say every time... it's a case by case basis", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 19, body: "You need a hero who can efficiently soak two lanes, Xul is the best candidate, the other team can't have Sylvanas, and your team must focus on delaying without dying. But yes, it can be a good idea.", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 24, body: "Also, if you do something like that, make sure your Kael'thas doesn't step right in front of the gate just as the punisher gets there so that you can't bait it over the gate and the enemy team gets a ton of value off the punisher", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 24, body: "I maybe have had a bad experience with trading the first punisher for soak in the past", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 20, body: "L5 yesterday played on IS with a Sylv in their team and instead of doing the first shrine they pushed the Top keep with sylvanas. At the 2nd Shrine they pusshed mid and Bot wall and parts of the keep. That forced the enmyteam to go away from shrines and deff, at least with 3-4 people slowing it down alot", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 20, body: "that worked for the start and gave them a good advantage", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 20, body: "but alter on they needed to win Teamfights to march in, which they did.", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 20, body: "So it's possible to do something like that and be sucsessfull but you need a very controlled Team and the right Heroes. I think tey only had sylv and Falstadt for dmg", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 24, body: "You can definitely give up the immortal to soak or push if you have Sylvannas, I think the main takeaway is that you shoulnd't do that against Sylvannas", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 20, body: "Yep that will go bad for you", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 24, body: "Cavalierguest great cast tonight!", chatable_id: txt_13.id, chatable_type: "TextChannel")
    Message.create!(author_id: 19, body: "thanks!", chatable_id: txt_13.id, chatable_type: "TextChannel")

    txt_14 = TextChannel.create!(channel_id: chan_3.id, title: "replayshare", description: "share replays and help analyze")
    Message.create!(author_id: 1, body: "This is the beginning of the #replayshare channel.", chatable_id: txt_14.id, chatable_type: "TextChannel")
    Message.create!(author_id: 21, body: "I am not sure how I feel about discussing games again that were already on ES", chatable_id: txt_14.id, chatable_type: "TextChannel")
    Message.create!(author_id: 21, body: "seems a little redundant, but I leave that to the majority", chatable_id: txt_14.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "I mean, it's less up to the majority and more up to Cav if he thinks it would be productive", chatable_id: txt_14.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "Particularly in games that he had no involvement in, like the Heart vs Kraken game", chatable_id: txt_14.id, chatable_type: "TextChannel")
    Message.create!(author_id: 21, body: "Oh well if they are games that were not discussed hten I don't mind ^^", chatable_id: txt_14.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "I mean it's not that they weren't discussed, just not as discussed as by Cav usually", chatable_id: txt_14.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "And when he's doing a replay review, he tends to be much more thorough because then he doesn't have to worry about his own play", chatable_id: txt_14.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "In a 20 minute game, you usually only have 5 or so minutes in game of discussion, and about the same before and after", chatable_id: txt_14.id, chatable_type: "TextChannel")

    txt_15 = TextChannel.create!(channel_id: chan_3.id, title: "lfscrims", description: "set up scrims here")
    Message.create!(author_id: 1, body: "This is the beginning of the #lfscrims channel.", chatable_id: txt_15.id, chatable_type: "TextChannel")
    Message.create!(author_id: 22, body: "If as in 'in for scrims'?", chatable_id: txt_15.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "it's an L", chatable_id: txt_15.id, chatable_type: "TextChannel")
    Message.create!(author_id: 23, body: "Looking for scrims", chatable_id: txt_15.id, chatable_type: "TextChannel")

    txt_16 = TextChannel.create!(channel_id: chan_3.id, title: "tournamentdiscussion", description: "watch broadcasts/tourneys together")
    Message.create!(author_id: 1, body: "This is the beginning of the #tournamentdiscussion channel.", chatable_id: txt_16.id, chatable_type: "TextChannel")
    Message.create!(author_id: 24, body: "anyone want to watch the upcoming tournament together at my place?", chatable_id: txt_16.id, chatable_type: "TextChannel")
    Message.create!(author_id: 24, body: "anyone?", chatable_id: txt_16.id, chatable_type: "TextChannel")
    Message.create!(author_id: 24, body: ":(", chatable_id: txt_16.id, chatable_type: "TextChannel")

    dm_1 = DirectMessage.create!(speaker_id: 2, listener_id: user.id)
    Message.create!(author_id: 1, body: "This is the beginning of the direct message history between eliasylee and ShyGuy#{guest_number}.", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "yo shyGuy#{guest_number}", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "can I get some feedback on my portfolio?", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "http://eliasylee.github.io/", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: user.id, body: "hey eli", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: user.id, body: "yeah np give me a sec", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "let me know what you think of the game too lol", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "http://eliasylee.github.io/bomb_tag", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: user.id, body: "holy crap this is awesome", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: user.id, body: "it's actually pretty hard LOL", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "yeah it's surprisingly difficult", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: user.id, body: "how is the computer so good???", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "I just hard-coded the AI to always chase player 1 if it has the bomb haha", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "it takes its position versus yours and calculates the difference", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "then moves left or right depending on that", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "it also adds in a jump if your position is above its position", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: user.id, body: "oh neat", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: user.id, body: "yeah this is sick", chatable_type: "DirectMessage", chatable_id: dm_1.id)
    Message.create!(author_id: 2, body: "thanks!", chatable_type: "DirectMessage", chatable_id: dm_1.id)

    dm_2 = DirectMessage.create!(speaker_id: 4, listener_id: user.id)
    Message.create!(author_id: 1, body: "This is the beginning of the direct message history between Bryan792 and ShyGuy#{guest_number}.", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: 4, body: "I think, going forward, we should just have the people who are playing hots most often be regulars on the team and have everyone else be subs", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "Kk then we need to decide if that is David or Blee", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: 4, body: "they can alternate", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "Cause they are both super mia", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "Ah okay", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "btw did you say that you feel like kelvin shouldn't be solo tank?", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "in the google sheet I have me as solo tank and kelvin as flex", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "but now that I think about it, I feel like it'd be better if I was flex because of how deep my hero pool is", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: 4, body: "id rather have you as solo tank or as a tank/bruiser in a 2 warrior comp", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "hm okay", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "we'll make it work somehow", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: 4, body: "my only concern is if zag is still in the pool", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "?", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: 4, body: "zag too good", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "ah yeah very possible that they'll take it during their first pick phase", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: user.id, body: "do we want to ban first-ban rehgar btw?", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: 4, body: "hmm", chatable_type: "DirectMessage", chatable_id: dm_2.id)
    Message.create!(author_id: 4, body: "maybe ban kt", chatable_type: "DirectMessage", chatable_id: dm_2.id)

    dm_3 = DirectMessage.create!(speaker_id: 7, listener_id: user.id)
    Message.create!(author_id: 1, body: "This is the beginning of the direct message history between AndyEskimo and ShyGuy#{guest_number}.", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: 7, body: "is sabbsie anyone i know", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: user.id, body: "ahh no", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: user.id, body: "he probably played with us in OW though", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: user.id, body: "he's bryan's friend's friend", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: 7, body: "oic lol", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: user.id, body: "and hes a smasher?", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: user.id, body: "yeah apparently he streams too haha", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: user.id, body: "must be pretty good", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: 7, body: "o dayum", chatable_type: "DirectMessage", chatable_id: dm_3.id)
    Message.create!(author_id: 7, body: "cool", chatable_type: "DirectMessage", chatable_id: dm_3.id)

    dm_4 = DirectMessage.create!(speaker_id: 5, listener_id: user.id)
    Message.create!(author_id: 1, body: "This is the beginning of the direct message history between ShyGuy#{guest_number} and smartglo1.", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "yo louis", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "Yo", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "Wassup", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "so I have logitech g35 headphones", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "and was wondering if you have the same problem with your headphones", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "where the audio for youtube is super quiet for some reason", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "i've looked it up and people have had the same issue for years", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "but I haven't found a fix for it", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "i used to have the problem with my g930s", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "and i just kinda switched to spekaers when i would watch youtube", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "and then i stopped using them", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "so i can't erally say there's a fix", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "lol", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "damn haha", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "that's unfortunate", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "btw I kidna figured out how to fix the logitech headphone issue'", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "you have to click on the sound icon in the bottom right and click on mixer", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "and adjust it for chrome", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: user.id, body: "have to do it every once in a while...", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "I see", chatable_type: "DirectMessage", chatable_id: dm_4.id)
    Message.create!(author_id: 5, body: "Interesting", chatable_type: "DirectMessage", chatable_id: dm_4.id)

    dm_5 = DirectMessage.create!(speaker_id: 23, listener_id: user.id)
    Message.create!(author_id: 1, body: "This is the beginning of the direct message history between ShyGuy#{guest_number} and rentaro.", chatable_type: "DirectMessage", chatable_id: dm_5.id)
    Message.create!(author_id: user.id, body: "yo ggs they were fun today", chatable_type: "DirectMessage", chatable_id: dm_5.id)
    Message.create!(author_id: 23, body: "yeah np gg", chatable_type: "DirectMessage", chatable_id: dm_5.id)
    Message.create!(author_id: user.id, body: "see you next week", chatable_type: "DirectMessage", chatable_id: dm_5.id)

    dm_6 = DirectMessage.create!(speaker_id: user.id, listener_id: 3)
    Message.create!(author_id: 1, body: "This is the beginning of the direct message history between ShyGuy#{guest_number} and Sunny.", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: user.id, body: "yo ben", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: user.id, body: "with this tournament thing, would you want to cast with me?", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: user.id, body: "i'm anticipating open bracket, rank 15 and below bracket, and rank 30 and below bracket", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: user.id, body: "or maybe open, 10, 20, 30", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: user.id, body: "but either way we can participate and cast as well", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: user.id, body: "ben", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: user.id, body: "game or no", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: 3, body: "whats this", chatable_type: "DirectMessage", chatable_id: dm_6.id)
    Message.create!(author_id: 3, body: "join the server?", chatable_type: "DirectMessage", chatable_id: dm_6.id)

    return user
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
