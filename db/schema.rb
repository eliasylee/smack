# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161006023621) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.integer  "admin_id",    null: false
    t.string   "title",       null: false
    t.text     "description"
    t.string   "icon_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["admin_id"], name: "index_channels_on_admin_id", using: :btree
  end

  create_table "direct_messages", force: :cascade do |t|
    t.integer  "speaker_id",  null: false
    t.integer  "listener_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["speaker_id", "listener_id"], name: "index_direct_messages_on_speaker_id_and_listener_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "author_id",     null: false
    t.text     "body",          null: false
    t.string   "chatable_type"
    t.integer  "chatable_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["chatable_type", "chatable_id"], name: "index_messages_on_chatable_type_and_chatable_id", using: :btree
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "channel_id"], name: "index_subscriptions_on_user_id_and_channel_id", using: :btree
  end

  create_table "text_channels", force: :cascade do |t|
    t.integer  "channel_id",  null: false
    t.string   "title",       null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["channel_id"], name: "index_text_channels_on_channel_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "color"
  end

end
