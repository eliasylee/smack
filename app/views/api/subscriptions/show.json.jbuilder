json.array! @subscriptions do |subscription|
  json.id subscription.id
  json.user_id subscription.user.id
  json.username subscription.user.username
  json.color subscription.user.color
end
