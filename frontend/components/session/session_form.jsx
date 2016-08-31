import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate () {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn () {
    if (this.props.loggedIn) {
      hashHistory.push("/channels/me");
    }
  }

  update (field) {
    return e => { this.setState({ [field]: e.currentTarget.value }); };
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLinkHeader () {
    if (this.props.formType === "login") {
      return (
        <div className="sessionFormHeader">
          Welcome back.
        </div>
      )
    } else {
      return (
        <div className="sessionFormHeader">
          Join the fray.
        </div>
      )
    }
  }

  navLinkFooter () {
    if (this.props.formType === "login") {
      return (
        <div className="sessionFormFooter">
          Need an account? <Link to="/signup">Register</Link>
        </div>
      )
    } else {
      return (
        <div className="sessionFormFooter">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      )
    }
  }

  background () {
    if (this.props.formType === "login") {
      return (
        "loginBackground"
      )
    } else {
      return (
        "signupBackground"
      )
    }
  }

  renderErrors () {
    return (
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className="sessionView">
        <div className="authBackgroundWrap">
          <div className={this.background()}></div>
        </div>
        <div className="sessionFormBoxOuter">
          <div className="sessionFormBoxInner">
            <div className="sessionFormBoxLeft">
              <div className="sessionFormLogo">
                <img src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png" alt="frontPageLogoLarge" />
              </div>
            </div>
            <div className="sessionFormBoxRight">
              { this.navLinkHeader() }
              <form onSubmit={this.handleSubmit} className="sessionForm">
                { this.renderErrors() }
                <div className="sessionInputBox">
                  <div className="sessionUsernameBox">
                    <div className="usernameWord">Username</div>
                    <div className="usernameInputLine">
                      <input type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        className="sessionInput" />
                    </div>
                  </div>
                  <div className='sessionPasswordBox'>
                    <div className="passwordWord">Password</div>
                    <div className="passwordInputLine">
                      <input type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="sessionInput" />
                    </div>
                  </div>
                  <div className="sessionSubmitBoxOuter">
                    <div className="sessionSubmitBoxInner">
                      <input className="sessionSubmitButton" type="submit" value="Submit" />
                    </div>
                  </div>
                </div>
              </form>
              { this.navLinkFooter() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
