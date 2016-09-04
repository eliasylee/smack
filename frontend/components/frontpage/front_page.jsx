import React from 'react';
import { withRouter } from 'react-router';

class FrontPage extends React.Component {
  constructor (props) {
    super(props);
    this._routeToLogIn = this._routeToLogIn.bind(this);
    this._routeToSignUp = this._routeToSignUp.bind(this);
  }

  _routeToLogIn () {
    this.props.router.push({
      pathname: '/login'
    });
  }

  _routeToSignUp () {
    this.props.router.push({
      pathname: '/signup'
    });
  }

  render () {
    return (
      <div className="frontPageView">
        <header className="frontPageHeader">
          <div className="frontPageLogoBoxSmall">
            <img src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png" alt="frontPageLogoSmall"/>
          </div>
        </header>
        <content className="frontPageBody">
          <div className="frontPageContentBox">
            <div className="frontPageTagLineBox">
              So we know you can walk the walk... But can you talk the talk?
            </div>
            <div className="frontPageButtonBox">
              <button className="frontPageButton" onClick={this._routeToSignUp}>
                Start Talking Smack
              </button>
              <button className="frontPageButton" onClick={this._routeToLogIn}>
                Continue Smack-Talking
              </button>
            </div>
            <div className="frontPageLogoBoxLarge">
              <img src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png" alt="frontPageLogoLarge" />
            </div>
          </div>
        </content>
      </div>
    )
  }
}

export default withRouter(FrontPage);
