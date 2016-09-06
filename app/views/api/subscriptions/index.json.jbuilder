json.array! @subscribers do |subscriber|
  json.subscriber do
    json.user_id subscriber.id
    json.username subscriber.username
  end
end
