class CreateTextChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :text_channels do |t|
      t.integer :channel_id, null: false, index: true
      t.string :title, null: false
      t.string :description

      t.timestamps
    end
  end
end
