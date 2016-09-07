json.array! @direct_messages do |direct_message|
  json.id direct_message.id
  json.username direct_message.username(@current_user)
end
