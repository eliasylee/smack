class TextChannel < ApplicationRecord
  validates :channel_id, :title, presence: true

  belongs_to: :channel
end
