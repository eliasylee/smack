json.username @direct_message.username

json.messages @direct_message.messages do |message|
  json.username message.author.username
  json.body message.body
  json.created_at message.created_at
  json.updated_at message.updated_at
end
