# Smack

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Smack is a Slack/Discord-inspired chat site focused on serving the gaming community.

0. Hosting on Heroku
0. Production README
0. New account creation, login, and guest/demo login
0. Channels
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Live chat
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Direct Message
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Team or multi-person DM
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature

## Design Docs
* [Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 0: Websocket Set-Up

**Objective** Integrate Websocket for live chat functionality.

- [ ] Implement Websocket-Rails or Action-Cable

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for front-end authentication
- [ ] User sign-up/sign-in components
- [ ] Blank landing component after sign-up/sign-in
- [ ] Style sign-up/sign-in components
- [ ] Seed users

### Phase 2: Channels (2 days)

**Objective:** Channels belong to users and can be created, read, edited and destroyed through the API.

- [ ] `Channel` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for channels (`ChannelsController`)
- [ ] JBuilder views for channel
- Channel components and respective Redux loops
  - [ ] `ChannelsIndex`
  - [ ] `ChannelForm`
- [ ] Style channels components
- [ ] Seed channels

### Phase 3: Text Channels (2 days)

**Objective:** Text channels belong to channels and can be created, read, edited and destroyed through the API.

- [ ] `Text Channel` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for text channels (`TextChannelsController`)
- [ ] JBuilder views for text channel
- Text Channel components and respective Redux loops
  - [ ] `TextChannelsIndex`
  - [ ] `TextChannelForm`
- [ ] Style text channels components
- [ ] Seed text channels

### Phase 4: Direct Messages (2 days)

**Objective:** Direct Messages belong to users and can be created, read, edited and destroyed through the API.

- [ ] `Direct Message` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for direct messages (`DirectMessagesController`)
- [ ] JBuilder views for direct messages
- Direct message components and respective Redux loops
  - [ ] `DirectMessagesIndex`
  - [ ] `DirectMessageForm`
- [ ] Style direct messages components
- [ ] Seed direct messages

### Phase 5: Chat Lines (2 days)

**Objective:** Chat lines belong to direct messages and text channels and can be created, read, edited and destroyed through the API.

- [ ] `Chat Line` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for chat lines (`ChatLinesController`)
- [ ] JBuilder views for direct messages
- Chat line components and respective Redux loops
  - [ ] `ChatLinesIndex`
  - [ ] `ChatLineForm`
- [ ] Style chat lines components
- [ ] Seed chat lines

### Bonus Features (TBD)
- [ ] Friend's List that automatically direct to empty DM page
- [ ] Emote functionality in Chat Line Creation
- [ ] Pinned Messages
- [ ] Message mentions
