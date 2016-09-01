import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import FrontPageContainer from './frontpage/front_page_container';
import SessionFormContainer from './session/session_form_container';
import ChannelNavContainer from './channels/channel_nav_container';
import TextChannelNavContainer from './text_channel_nav/text_channel_nav_container';

import { fetchAllChannels, fetchOneChannel } from '../actions/channel_actions';
import { fetchOneTextChannel } from '../actions/text_channel_actions';

const AppRouter = ({ store }) => {
  const ensureLoggedIn = (nextState, replace) => {
    const currentUser = currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  const redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = currentUser;
    if (currentUser) {
      replace('/channels/1');
    }
  }

  const fetchAllChannelsOnEnter = () => {
    store.dispatch(fetchAllChannels());
  }

  const fetchOneChannelOnEnter = (nextState) => {
    store.dispatch(fetchOneChannel(nextState.params.id));
  }

  const fetchOneTextChannelOnEnter = () => {
    store.dispatch(fetchOneTextChannel());
  }

  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={redirectIfLoggedIn}>
        <IndexRoute component={FrontPageContainer} />
        <Route path="/signup" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/login" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/channels" component={ChannelNavContainer} onEnter={fetchAllChannelsOnEnter}>
          <Route path="/channels/:id" component={TextChannelNavContainer} onEnter={fetchOneChannelOnEnter} />
        </Route>
      </Route>
    </Router>
  )
}

export default AppRouter;
