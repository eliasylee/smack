json.array! @subscribers do |subscriber|
  json.user_id subscriber.id
  json.username subscriber.username
end
