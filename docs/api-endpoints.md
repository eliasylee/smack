# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Channels

- `GET /api/channels`
  - Channel navigation bar, takes current user's ID
- `POST /api/channels`
- `GET /api/channels/:id`
- `PATCH /api/channels/:id`
- `DELETE /api/channels/:id`

### TextChannels

- `GET /api/channels/:id/textChannels`
  - Text channels list, takes current channel's ID
- `POST /api/channels/:id/textChannels`
- `GET /api/channels/:id/textChannels/:id`
- `PATCH /api/channels/:id/textChannels/:id`
- `DELETE /api/channels/:id/textChannels/:id`

### DirectMessages

- `GET /api/channels/:id/directMessages`
  - Direct messages list, takes current user's ID
- `POST /api/channels/:id/directMessages`
- `GET /api/channels/:id/directMessages/:id`
- `PATCH /api/channels/:id/directMessages/:id`
- `DELETE /api/channels/:id/directMessages/:id`

### ChatLines

- `GET /api/directMessages`
  - Chat container, takes parent container's type and ID
- `POST /api/directMessages`
- `GET /api/directMessages/:id`
- `PATCH /api/directMessages/:id`
- `DELETE /api/directMessages/:id`

### Friends

- `GET /api/friends`
  - Friends list, takes current user's ID
- `DELETE /api/friends/:id`
