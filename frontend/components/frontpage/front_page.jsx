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
        <div className="frontPageHeader">
          <img src="red-logo-fist-medium.png" alt="frontPageLogoMed"/>
        </div>
        <div className="frontPageBody">
          <div className="frontPageTagLineBox">
            So we know you can walk the walk... But can you <font color="#e6544a">talk</font> the <font color="#e6544a">talk</font>?
          </div>
          <div className="frontPageLogoBoxLarge">
            <img src="red-logo.png" className="frontPageLogoLarge" alt="frontPageLogo" />
          </div>
          <div className="frontPageButtonBox">
            <button className="frontPageButton" onClick={this._routeToSignUp}>
              Start Talking Smack
            </button>
            <button className="frontPageButton" onClick={this._routeToLogIn}>
              Continue Smack-Talking
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(FrontPage);
