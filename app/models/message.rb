class Message < ApplicationRecord
  validates :author_id, :body, :chatable_id, :chatable_type

  belongs_to :user,
    through: :author_id

  belongs_to :chatable, polymorphic: true
end
