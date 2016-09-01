json.array! @channels do |channel|
  json.extract! channel, :id, :title, :icon_url
end
