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

### Messages

- `GET /api/Messages`
  - Chat container, takes parent container's type and ID
- `POST /api/Messages`
- `GET /api/Messages/:id`
- `PATCH /api/Messages/:id`
- `DELETE /api/Messages/:id`

### Friends

- `GET /api/friends`
  - Friends list, takes current user's ID
- `DELETE /api/friends/:id`
