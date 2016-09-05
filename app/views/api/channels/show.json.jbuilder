json.extract! @channel, :id, :title, :description

json.admin do
  json.id @channel.admin.id
end

json.attachments @channel.text_channels do |text_channel|
  json.extract! text_channel, :id, :title, :description
end
