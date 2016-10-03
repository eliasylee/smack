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
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.currentUser && newProps.currentUser.id) {
      let newChannel = 'me_channel_' + newProps.currentUser.id;

      if (!window.pusher || !window.pusher.channels.channels[newChannel]) {
        this.createPusherChannel(newProps.currentUser.id);
      }
    }

    if (window.pusher && newProps.currentUser && newProps.currentUser.id !== this.props.currentUser.id) {
      window.pusher.unsubscribe('me_channel_' + this.props.currentUser.id);
    }
  }

  createPusherChannel (currentUserId) {
    if (!window.pusher) {
      window.pusher = new Pusher('a6428d82cdddd683832f', {
        encrypted: true
      });
    }

    let channel = window.pusher.subscribe('me_channel_' + currentUserId);
    channel.bind('direct_message_action', data => {
      this.props.fetchAllDirectMessages();
    });
  }

  componentWillUnmount () {
    this.props.dismountDirectMessage();
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
        this.setState({ "username": "" });
        this.props.clearDirectMessageErrors();
        this.props.createDirectMessage({ direct_message });
      }
    }
  }

  renderFormInput () {
    const { errors } = this.props;

    if (!errors || errors.length === 0) {
      return "Start a conversation";
    } else {
      return errors[0];
    }
  }

  inputColor () {
    const { errors } = this.props;

    if (!errors || errors.length === 0) {
      return "directMessageInput";
    } else {
      return "directMessageInput withErrors";
    }
  }

  createDirectMessageForm () {
    return (
      <form onSubmit={this.handleSubmit} className="createDirectMessageForm">
        <div className="createDirectMessageNameBox">
          <div className="directMessageInputLine">
            <input type="text"
                   value={this.state.username}
                   onChange={this.updateState("username")}
                   placeholder={this.renderFormInput()}
                   className={this.inputColor()} />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <div className="newDirectMessageSubmitBox">
            <input className="newdirectMessageSubmitButton"
                   type="submit"
                   value="" />
          </div>
        </div>
      </form>
    )
  }

  waitforDirectMessages () {
    const { directMessages, stateDirectMessage, destroyDirectMessage } = this.props;

    if (directMessages) {
      return (
        <div className="textChannelNavBarButtons">
          {directMessages.map( directMessage => {
            return <DirectMessagesItem directMessage={directMessage}
                                       stateDirectMessage={stateDirectMessage}
                                       destroyDirectMessage={destroyDirectMessage}
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
              <span className="directMessageHeaderBox">
                <div className="directMessageFormBoxOuter">
                  {this.createDirectMessageForm()}
                </div>
              </span>
              <span className="textChannelNavBarTitleBox directMessageWord">
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
                    <button className="logOutIcon" onClick={this.handleLogOut}>
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                    <span className="logOutHover">Log Out</span>
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
