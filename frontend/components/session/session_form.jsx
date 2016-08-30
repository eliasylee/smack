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
      hashHistory.push("/");
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
          Welcome back
        </div>
      )
    } else {
      return (
        <div className="sessionFormHeader">
          Join the fray
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
      <div className="sessionFormBox">
        { this.navLinkHeader() }
        <form onSubmit={this.handleSubmit} className="sessionForm">
          { this.renderErrors() }
          <div className="sessionInputBox">
            <label> Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="sessionInput" />
            </label>

            <label> Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="sessionInput" />
            </label>

            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
        { this.navLinkFooter() }
      </div>
    );
  }
}

export default SessionForm;
