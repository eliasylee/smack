import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import FrontPageContainer from './frontpage/front_page_container';
import SessionFormContainer from './session/session_form_container';
import ChannelNavContainer from './channels/channel_nav_container';

class AppRouter extends React.Component {
  constructor (props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
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

  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={this._redirectIfLoggedIn}>
          <IndexRoute component={FrontPageContainer} />
          <Route path="/signup" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn} />
          <Route path="/login" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn} />
          <Route path="/channels" component={ChannelNavContainer} />
        </Route>
      </Router>
    )
  }
}

export default AppRouter;
