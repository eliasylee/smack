json.text_channel do
  json.id @text_channel.id
  json.title @text_channel.title
  json.description @text_channel.description

  json.messages @text_channel.messages do |message|
    json.id message.id
    json.timestamps message.timestamps
    json.body message.body

    json.author do
      json.id message.author.id
      json.username message.author.username
    end
  end
end
