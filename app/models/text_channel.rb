class TextChannel < ApplicationRecord
  validates :channel_id, :title, presence: true

  belongs_to :channel
  has_many :messages, :as => :chatable
end
