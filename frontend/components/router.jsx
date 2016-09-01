import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import FrontPageContainer from './frontpage/front_page_container';
import SessionFormContainer from './session/session_form_container';
import ChannelNavContainer from './channels/channel_nav_container';
import TextChannelContainer from './textchannels/text_channel_container';
import { fetchAllChannels, fetchOneChannel } from '../actions/channel_actions';

class AppRouter extends React.Component {
  constructor () {
    super();
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._fetchAllChannelsOnEnter = this._fetchAllChannelsOnEnter.bind(this);
  }

  _ensureLoggedIn (nextState, replace) {
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn (nextState, replace) {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/channels/me');
    }
  }

  _fetchAllChannelsOnEnter ({ store }) {
    this.context.store.dispatch(fetchAllChannels());
  }

  _fetchOneChannelOnEnter ({ store }) {
    this.context.store.dispatch(fetchOneChannel());
  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={this._redirectIfLoggedIn}>
          <IndexRoute component={FrontPageContainer} />
          <Route path="/signup" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn} />
          <Route path="/login" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn} />
          <Route path="/channels" component={ChannelNavContainer} onEnter={this._fetchAllChannelsOnEnter}>
            <Route path="/channels/:id" component={TextChannelContainer} onEnter={this._fetchOneChannelOnEnter}/>
          </Route>
        </Route>
      </Router>
    )
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
