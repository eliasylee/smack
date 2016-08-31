# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
iconUrl         | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## friends
column name     | data type | details
----------------|-----------|-----------------------
user_id_one     | integer   | not null
user_id_two     | integer   | not null

## subscriptions
column name     | data type | details
----------------|-----------|-----------------------
user_id         | integer   | not null
channel_id      | integer   | not null

## channels
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
description    | text      |
iconUrl        | string    |
creator_id     | integer   | not null, foreign key (references users), indexed

## chat_channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
channel_id  | integer   | not null, foreign key (references channels), indexed
title       | string    | not null
description | string    |

## direct_chats
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
