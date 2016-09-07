class CreateDirectMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :direct_messages do |t|
      t.integer :speaker_id, null: false
      t.integer :listener_id, null: false

      t.timestamps
    end

    add_index :direct_messages, [:speaker_id, :listener_id]
  end
end
