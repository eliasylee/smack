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
                We know you can walk the walk, but...
              </span>
            </div>
            <div className="FrontPageSessionBox">
              <button className="frontPageButton" onClick={this._routeToSignUp}>
                Click here Smack talk!
              </button>
              <button className="frontPageButton" onClick={this._routeToLogIn}>
                I've BEEN Smack-talking, son!
              </button>
            </div>
          </div>
        </content>
      </div>
    )
  }
}

export default withRouter(FrontPage);
