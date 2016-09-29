import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';

import FrontPageContainer from '../frontpage/front_page_container';
import SessionFormContainer from '../session/session_form_container';
import ChannelNavContainer from '../channels_nav/channel_nav_container';
import TextChannelNavContainer from '../text_channels_nav/text_channel_nav_container';
import TextChannelChatContainer from '../text_channel_chat/text_channel_chat_container';
import DirectMessagesContainer from '../direct_messages/direct_messages_container';
import DirectChatMessageContainer from '../direct_chat_message/direct_chat_message_container';
import MeSplashContainer from '../direct_messages/me_splash_container';

import { fetchAllChannels, fetchOneChannel } from '../../actions/channel_actions';
import { fetchOneTextChannel } from '../../actions/text_channel_actions';
import { fetchAllSubscriptions } from '../../actions/subscription_actions';
import { fetchAllDirectMessages, fetchOneDirectMessage } from '../../actions/direct_message_actions';

const AppRouter = ({ currentUser, store }) => {
  const ensureLoggedIn = (nextState, replace) => {
    if (!currentUser) {
      replace('/login');
    }
  }

  const redirectIfLoggedIn = (nextState, replace) => {
    if (currentUser) {
      replace('/channels/@me');
    }
  }

  const checkChannelId = (nextState, replace) => {
    let channelIds = Object.keys(store.getState().channels.channels);

    if (!channelIds.includes(nextState.params.id[0])) {
      replace('/channels/@me');
    }
  }

  const checkDirectMessageId = (nextState, replace) => {
    let directMessages = store.getState().directMessages
    let directMessageIds = [];

    directMessages.forEach( directMessage => {
      directMessageIds.push(directMessage.id);
    });

    if (!directMessageIds.includes(nextState.params.id[1])) {
      replace('/channels/@me');
    }
  }

  const fetchAllChannelsOnEnter = () => {
    store.dispatch(fetchAllChannels());
  }

  const fetchChannelInformation = (nextState, replace) => {
    checkChannelId(nextState, replace);
    store.dispatch(fetchOneChannel(nextState.params.id[0]));
    store.dispatch(fetchAllSubscriptions(nextState.params.id[0]));
  }

  const fetchOneTextChannelOnEnter = nextState => {
    store.dispatch(fetchOneTextChannel(nextState.params.id[1]));
  }

  const fetchAllDirectMessagesOnEnter = nextState => {
    store.dispatch(fetchAllDirectMessages());
  }

  const fetchOneDirectMessageOnEnter = (nextState, replace) => {
    checkDirectMessageId(nextState, replace);
    store.dispatch(fetchOneDirectMessage(nextState.params.id));
  }

  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={redirectIfLoggedIn}>
        <IndexRoute component={FrontPageContainer} />
        <Route path="/signup" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/login" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/channels" component={ChannelNavContainer} onEnter={fetchAllChannelsOnEnter}>
          <Route path="/channels/@me" component={DirectMessagesContainer} onEnter={fetchAllDirectMessagesOnEnter}>
            <IndexRoute component={MeSplashContainer} />
            <Route path="/channels/@me/:id" component={DirectChatMessageContainer} onEnter={fetchOneDirectMessageOnEnter} />
          </Route>
          <Route path="/channels/:id" component={TextChannelNavContainer} onEnter={fetchChannelInformation}>
            <Route path="/channels/:id/:id" component={TextChannelChatContainer} onEnter={fetchOneTextChannelOnEnter} />
          </Route>
        </Route>
      </Route>
    </Router>
  )
}

export default AppRouter;
