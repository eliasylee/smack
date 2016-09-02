class Message < ApplicationRecord
  validates :author_id, :body, :chatable_id, :chatable_type, presence: true

  belongs_to :user,
    foreign_key: :author_id

  belongs_to :chatable, polymorphic: true
end
