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
            <div className="frontPageLogoBoxLarge">
              <img src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png" alt="frontPageLogoLarge" />
            </div>
            <div className="frontPageTagLineBox">
              <span className="frontPageTagLine">
                So you can walk the walk, but can you talk the talk?
              </span>
            </div>
            <div className="FrontPageSessionBox">
              <div className="FrontPageSignUpBox">
                <button className="SignUpButton" onClick={this._routeToSignUp}>
                  Start Smack-talking!
                </button>
              </div>
              <div className="FrontPageSignInBox">
                <button className="LogInButton" onClick={this._routeToLogIn}>
                  I've BEEN Smack-talking, son!
                </button>
              </div>
            </div>
          </div>
        </content>
      </div>
    )
  }
}

export default withRouter(FrontPage);
