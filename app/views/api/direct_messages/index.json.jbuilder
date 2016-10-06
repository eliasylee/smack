json.array! @direct_messages do |direct_message|
  json.id direct_message.id
  json.username direct_message.username(@current_user)
  json.color User.find_by_username(direct_message.username(@current_user)).color
end
