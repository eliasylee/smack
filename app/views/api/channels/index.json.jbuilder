json.array! @channels do |channel|
  json.extract! channel, :id, :title, :icon_url

  json.attachments channel.text_channels do |text_channel|
    json.extract! text_channel, :id
  end
end
