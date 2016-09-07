class DirectMessage < ApplicationRecord
  validates :speaker_id, :listener_id, presence: true

  belongs_to :speaker,
    foreign_key: :speaker_id,
    class_name: "User"

  belongs_to :listener,
    foreign_key: :listener_id,
    class_name: "User"

  has_many :messages, :as => :chatable

  def username
    users = User.where("id = ? OR id = ?", self.speaker_id, self.listener_id)

    if users[0].username == current_user.username
      return users[0].username
    else
      return users[1].username
    end
  end
end
