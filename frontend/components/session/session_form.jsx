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
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  componentDidMount () {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate () {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn () {
    if (this.props.loggedIn) {
      hashHistory.push("/channels/@me");
    }
  }

  update (field) {
    return e => { this.setState({ [field]: e.currentTarget.value }) };
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
          Already have an account? <Link to="/login">Login</Link>
        </div>
      )
    }
  }

  guestLogIn () {
    let user = {
      username: "create_guest_account",
      password: "create_guest_password"
    };
    this.props.login({ user });
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

  renderUsernameTitle () {
    if (this.props.errors === undefined) {
      return <div className="passwordWord">Username</div>;
    };

    let errors = this.props.errors.map( error => {
      return error;
    });

    for (var i = 0; i < errors.length; i++) {
      if (errors[i].slice(0, 8) === "Username") {
        return <div className="usernameWord sessionErrors">{errors[i]}</div>;
      }
    }

    return <div className="usernameWord">Username</div>;
  }

  renderPasswordTitle () {
    if (this.props.errors === undefined) {
      return <div className="passwordWord">Password</div>;
    };

    let errors = this.props.errors.map( error => {
      return error
    });

    for (var i = 0; i < errors.length; i++) {
      if (errors[i].slice(0, 8) === "Password") {
        return <div className="passwordWord sessionErrors">{errors[i]}</div>;
      } else if (errors[i].slice(0, 11) === "Username or") {
        return <div className="passwordWord sessionErrors">Password or Username are incorrect</div>;
      }
    }

    return <div className="passwordWord">Password</div>;
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
                <img src="red-logo-fist-medium.png" alt="sessionLogoMed" />
              </div>
            </div>
            <div className="sessionFormBoxRight">
              { this.navLinkHeader() }
              <form onSubmit={this.handleSubmit} className="sessionForm">
                <div className="sessionInputBox">
                  <div className="sessionUsernameBox">
                    {this.renderUsernameTitle()}
                    <div className="usernameInputLine">
                      <input type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        className="sessionInput" />
                    </div>
                  </div>
                  <div className='sessionPasswordBox'>
                    {this.renderPasswordTitle()}
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
              <div className="sessionFooterBox">
                { this.navLinkFooter() }
                <button className="guestLogIn" onClick={this.guestLogIn}>
                  Guest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
