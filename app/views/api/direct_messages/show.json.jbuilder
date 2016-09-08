json.id @direct_message.id
json.username @direct_message.username(@current_user)

json.messages @direct_message.messages do |message|
  json.id message.id
  json.body message.body
  json.created_at message.created_at
  json.updated_at message.updated_at

  json.author do
    json.id message.author.id
    json.username message.author.username
  end
end
