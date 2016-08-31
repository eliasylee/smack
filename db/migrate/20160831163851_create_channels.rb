class CreateChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :channels do |t|
      t.integer :admin_id, null: false, index: true
      t.string :title, null: false
      t.text :description
      t.string :icon_url

      t.timestamps
    end
  end
end
