json.array! @text_channels do |text_channel|
  json.extract! text_channel :title, :description
end
