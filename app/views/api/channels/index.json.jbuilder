json.array! @channels do |channel|
  json.extract! channel :title, :icon_url
end
