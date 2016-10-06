json.extract! @text_channel, :id, :title, :description

json.attachments @text_channel.messages do |message|
  json.id message.id
  json.created_at message.created_at
  json.updated_at message.updated_at
  json.body message.body

  json.author do
    json.id message.author.id
    json.username message.author.username
    json.color message.author.color
  end
end
