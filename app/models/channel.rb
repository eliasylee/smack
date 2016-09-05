class Channel < ApplicationRecord
  validates :admin_id, :title, presence: true

  belongs_to :admin,
    foreign_key: :admin_id,
    class_name: "User"

  has_many :subscriptions
  has_many :subscribers,
    through: :subscriptions,
    source: :user

  has_many :text_channels
end
