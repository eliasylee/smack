json.extract! @channel :id, :title, :description

json.array! @channel.text_channels do |text_channel|
  json.extract! text_channel :id, :title, :description
end
