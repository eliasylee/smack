import React from 'react';
import DirectMessagesItem from './direct_messages_item';

class DirectMessages extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: ""
    }
    this.existingUsernames = this.existingUsernames.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.currentUser) {
      this.props.router.push(`/login`);
    }
  }

  updateState (property) {
    return e => this.setState({[property]: e.target.value});
  }

  existingUsernames () {
    let usernames = [];
    this.props.directMessages.forEach( directMessage => {
      usernames.push(directMessage.username);
    })
    return usernames;
  }

  handleSubmit (e) {
    e.preventDefault();
    let username = this.state.username;
    if (username !== "") {
      if (!this.existingUsernames().includes(username)) {
        let direct_message = Object.assign({}, this.state);
        this.props.createDirectMessage({ direct_message });
        this.setState({ "username": "" });
      }
    }
  }

  createDirectMessageForm () {
    return (
      <div className="createTextChannelFormBoxInner">
        <form onSubmit={this.handleSubmit} className="createTextChannelForm">
          <div className="createTextChannelNameBox">
            <div className="textChannelInputLine">
              <input type="text"
                value={this.state.title}
                onChange={this.updateState("username")}
                className="textChannelInput" />
            </div>
          </div>
          <div className="newTextChannelSubmitBox">
            <input className="newTextChannelSubmitButton" type="submit" value="Add" />
          </div>
        </form>
      </div>
    )
  }

  waitforDirectMessages () {
    const { directMessages, stateDirectMessage } = this.props;

    if (directMessages) {
      return (
        <div className="textChannelNavBarButtons">
          {directMessages.map( directMessage => {
            return <DirectMessagesItem directMessage={directMessage}
                                       stateDirectMessage={stateDirectMessage}
                                       key={directMessage.id} />
          })}
        </div>
      )
    }
  }

  handleLogOut () {
    this.props.logout();
  }

  prepUserName () {
    let result = "";
    if (this.props.currentUser) {
      this.props.currentUser.username.split().forEach( word => {
        result += word.slice(0, 1);
      });
    }
    return result;
  }

  render () {
    const { children } = this.props;
    let user = this.props.currentUser || { username: "" };
    return (
      <div className="mainView">
        <div className="textChannelNavBarBackground">
          <div className="textChannelNavBarBackgroundInner">
            <div className="textChannelNavBar">
              <span className="textChannelNavBarHeaderBox">
                <div className="createTextChannelFormBoxOuter">
                  {this.createDirectMessageForm()}
                </div>
              </span>
              <span className="textChannelNavBarTitleBox">
                <span className="textChannelNavBarTitle">
                  <span>Direct Messages</span>
                </span>
              </span>
              {this.waitforDirectMessages()}
            </div>
            <div className="navBarCurrentUserOuterBox">
              <div className="navBarCurrentUserLeftBox">
                <div className="currentLogoBox">
                  <div className="userLogo">
                    <div className="userLogoLetter">{this.prepUserName()}</div>
                  </div>
                </div>
                <div className="currentUsernameBox">
                  <span className="currentUsername">{user.username}</span>
                </div>
              </div>
              <div className='NavBarCurrentUserRightBox'>
                <div className="logOutIconBoxOuter">
                  <div className="logOutIconBoxInner">
                    <button className="logOutIcon" onClick={this.handleLogOut}>>>></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        { children }
      </div>
    )
  }
}

export default DirectMessages;
