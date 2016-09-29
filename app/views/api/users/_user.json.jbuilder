json.extract! user, :id, :username

json.channel_ids user.channels.ids
json.direct_message_ids user.direct_messages.ids
