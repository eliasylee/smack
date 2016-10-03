import React from 'react';
import { withRouter } from 'react-router';

class GuestCreation extends React.Component {
  componentDidMount () {
    this.redirectIfLoggedIn();

    let user = {
      username: "create_guest_account",
      password: "create_guest_password"
    };
    this.props.login(user)
  }

  componentDidUpdate () {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn () {
    if (this.props.loggedIn) {
      this.props.router.push("/channels/@me");
    }
  }

  render () {
    return (
      <div className="guestSplash">
        <div className="guestBox">
          <img className="guestLogo"
               src="red-logo-fist-medium.png"
               alt="frontPageLogoMed"/>
          <div className="guestCaption">
            Creating Guest Account!
          </div>
          <div className="guestCaptions">
            Seeding friends...
          </div>
          <div className="guestCaptions">
            Seeding conversations...
          </div>
          <div className="guestCaptions">
            Seeding social life...
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(GuestCreation);
