class Channel < ApplicationRecord
  validates :admin_id, :title, presence: true

  belongs_to: :user,
    foreign_key: :admin_id

  has_many: :text_channels
end
