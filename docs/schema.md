# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
iconUrl         | string    |
friendIds       | array     | default: []
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## channels
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
description    | text      |
iconUrl        | string    |
creator_id     | integer   | not null, foreign key (references users), indexed
userIds        | array     | default: []
textChannelsIds| array     | default: []

## text_channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
channel_id  | integer   | not null, foreign key (references channels), indexed
title       | string    | not null
description | string    |
userIds     | array     | default: []

## direct_messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    |
userIds     | array     | default: []

## chat_lines
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null
chatable    | references| polymorphic: true, index: true
