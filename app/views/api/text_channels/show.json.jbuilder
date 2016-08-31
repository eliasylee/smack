json.extract! @text_channel :id, :title, :description

json.array! @text_channel.messages do |message|
  json.message do
    json.id message.id
    json.timestamps message.timestamps
    json.body message.body
    json.author do
      json.id author.id
      json.username author.username
    end
  end
end
