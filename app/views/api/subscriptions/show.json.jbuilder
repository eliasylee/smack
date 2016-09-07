json.array! @subscriptions do |subscription|
  json.id subscription.id
  json.user_id subscription.user.id
  json.username subscription.user.username
end
