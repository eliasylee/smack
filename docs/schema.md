# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
icon_url        | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## friendships
column name     | data type | details
----------------|-----------|-----------------------
user_id_one     | integer   | not null
user_id_two     | integer   | not null

## subscriptions
column name     | data type | details
----------------|-----------|-----------------------
user_id         | integer   | not null
channel_id      | integer   | not null

## personal_channel
column name    | data type | details
---------------|-----------|-----------------------
user_id        | integer   | not null, foreign key (references users)
channel_id     | integer   | not null, foreign key (references channels)

## channels
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
description    | text      |
icon_url       | string    |
admin_id       | integer   | not null, foreign key (references users), indexed

## text_channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
channel_id  | integer   | not null, foreign key (references channels), indexed
title       | string    | not null
description | string    |

## direct_messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id_one | integer   | not null, foreign key (references users)
user_id_two | integer   | not null, foreign key (references users)

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
body            | text      | not null
chatable_type   | string    | not null
chatable_id     | integer   | not null, foreign key (references chatable type), indexed
