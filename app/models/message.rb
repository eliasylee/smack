class Message < ApplicationRecord
  validates :author_id, :body, :chatable_id, :chatable_type, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"

  belongs_to :chatable, polymorphic: true
end
