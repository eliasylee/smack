# Smack

[Smack live][heroku]

[heroku]: http://www.smack-fsp.herokuapp.com

Smack is a full-stack browser application inspired by Slack and built for the gaming community. It utilizes Ruby on Rails and a PostgreSQL database for the back-end and React/Redux for the front-end.

## Features and Implementation

### Channels & Text-Channels

Smack makes it easy to talk to different groups through personalized channels.

Users who create their own channel are assigned as admins and can invite as well as remove other users from their channel.

Each channel has unique text-channels, which allow users to compartmentalize separate discussions within the same group.

Admins can add and remove text-channels as well as edit each text-channel's description.

### Direct-Messages

Direct messaging is personal to each individual through their "Me Channel", which is located in the top left for all users.

Users can add each other to begin one-on-one conversations.

Previous direct messages are listed for easy-access on future occasions.

### Live Chat

Both text-channels and direct-messages feature live chat functionality enabled through Pusher, allowing users to chat in real-time.

When users are in a particular text-channel or direct-message chat, they are subscribed to that chat's Pusher "channel".

Each Pusher channel is bound to message posted, message updated, and message destroyed events.

### Single-Page

Smack is a one-page app and allows for quick navigation throughout the pages.

## Future Development

### Voice Chat

### Responsive Search
