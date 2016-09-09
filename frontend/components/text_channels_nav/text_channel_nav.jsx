import React from 'react';
import TextChannelNavItem from './text_channel_nav_item';
import { withRouter } from 'react-router';

class TextChannelNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      channel_id: "",
      title: "",
      view: false
    };
    this.textChannels = this.props.textChannels;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.prepUserName = this.prepUserName.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.createTextChannelForm = this.createTextChannelForm.bind(this);
    this.placeDestroyChannelButton = this.placeDestroyChannelButton.bind(this);
    this.handleDestroyChannel = this.handleDestroyChannel.bind(this);
  }

  componentWillUnmount () {
    this.props.dismountChannel();
  }

  toggleView () {
    let nextView = !this.state.view;
    if (!nextView) {
      this.setState({ "title": "" })
    }
    this.setState({ "view": nextView });
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.title !== "") {
      let text_channel = Object.assign({}, this.state);
      text_channel.channel_id = this.props.channel.id;
      text_channel.title = this.state.title.toLowerCase();
      this.toggleView();
      this.props.createTextChannel({ text_channel });
    }
  }

  update (property) {
    return e => this.setState({[property]: e.target.value});
  }

  createTextChannelForm () {
    if (this.state.view) {
      return (
        <div className="createTextChannelFormBoxInner">
          <form onSubmit={this.handleSubmit} className="createTextChannelForm">
            <div className="createTextChannelNameBox">
              <div className="textChannelInputLine">
                <input type="text"
                       placeholder="Create a text channel"
                       value={this.state.title}
                       onChange={this.update("title")}
                       className="textChannelInput" />
              </div>
            </div>
            <input className="newTextChannelSubmitButton" type="submit" value="" />
          </form>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  waitForTextChannels () {
    const { stateTextChannel, textChannels, channel } = this.props;
    const channelId = channel.id;

    if (textChannels) {
      let textChannelKeys = Object.keys(textChannels);
      return (
        <div className="textChannelNavBarButtons">
          {textChannelKeys.map( textChannelKey => {
            return <TextChannelNavItem textChannel={textChannels[textChannelKey]}
                                       stateTextChannel={stateTextChannel}
                                       textChannelKeys={textChannelKeys}
                                       fetchOneTextChannel={this.props.fetchOneTextChannel}
                                       destroyTextChannel={this.props.destroyTextChannel}
                                       channelId={channel.id}
                                       channelAdminId={channel.admin.id}
                                       currentUserId={this.props.currentUser.id}
                                       key={textChannelKey}
                                       clearTextMessages={this.props.clearTextMessages}/>
          })}
        </div>
      )
    }
  }

  addTextChannelButton () {
    const { currentUser, channel } = this.props;
    if (channel.admin && currentUser) {
      if (channel.admin.id === currentUser.id) {
        return (
          <button className="addTextChannel" onClick={this.toggleView}>+</button>
        )
      }
    }
  }

  handleLogOut () {
    this.props.logout();
  }

  handleDestroyChannel () {
    this.props.router.push(`/channels/@me`);
    this.props.destroyChannel(this.props.channel);
  }

  placeDestroyChannelButton () {
    const { currentUser, channel } = this.props;
    if (currentUser.id === channel.admin.id) {
      return <button onClick={this.handleDestroyChannel} className="channelDeleteButton"><i className="fa fa-trash" aria-hidden="true"></i></button>
    }
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
    let user = this.props.currentUser || { username: "" }
    return (
      <div className="mainView">
        <div className="textChannelNavBarBackground">
          <div className="textChannelNavBarBackgroundInner">
            <div className="textChannelNavBar">
              <span className="textChannelNavBarHeaderBox">
                <span className="textChannelTitleHeader">
                  <span>{this.props.channel.title}</span>
                </span>
                <div className="destroyChannelBox" onClick={this.handleDestroyChannel}>
                  {this.placeDestroyChannelButton()}
                </div>
              </span>
              <span className="textChannelNavBarTitleBox">
                <span className="textChannelNavBarTitle">
                  <span>Text Channels</span>
                  {this.addTextChannelButton()}
                </span>
              </span>
              <div className="createTextChannelFormBoxOuter">
                {this.createTextChannelForm()}
              </div>
              {this.waitForTextChannels()}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        { children }
      </div>
    );
  }
}

export default withRouter(TextChannelNav);
