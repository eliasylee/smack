import React from 'react';
import TextChannelNavItem from './text_channel_nav_item';
import { withRouter } from 'react-router';

class TextChannelNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.textChannels = this.props.textChannels;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.currentUser) {
      this.props.router.push(`/login`);
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({"title": this.state.title.toLowerCase()})
    const textChannel = Object.assign({}, this.state);
    this.props.createTextChannel({textChannel});
  }

  update (property) {
    return e => this.setState({[property]: e.target.value});
  }

  renderTitleTitle () {
    let errors = this.props.errors.map( error => {
      return error
    });

    if (errors === []) {
      return <div className="titleWord">Title</div>;
    } else {
      return <div className="titleWord channelErrors">{errors[0]}</div>;
    }
  }

  createTextChannelForm () {
    return (
      <div className="createTextChannelFormBoxInner">
        <span className="closeCreateTextChannelForm">x</span>
        <form onClick={this.handleSubmit} className="createTextChannelForm">
          <div className="createTextChannelNameBox">
            {this.renderTitleTitle()}
            <div className="titleInputLine">
              <input type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="sessionInput" />
            </div>
          </div>
          <div className="createTextChannelDescriptionBox">
            <div className="descriptionWord">Description</div>
            <div className="descriptionInputLine">
              <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="textChannelInput" />
            </div>
          </div>
          <div className="textChannelSubmitBoxOuter">
            <div className="textChannelSubmitBoxInner">
              <input className="textChannelSubmitButton" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    )
  }

  waitForTextChannels () {
    const { stateTextChannel, textChannels, channel, clearTextChannels } = this.props;
    const channelId = channel.id;

    if (textChannels) {
      return (
        <div className="textChannelNavBarButtons">
          {textChannels.map( textChannel => {
            return <TextChannelNavItem textChannel={textChannel}
                                       stateTextChannel={stateTextChannel}
                                       channelId={channel.id}
                                       key={textChannel.id}
                                       clearTextMessages={this.props.clearTextMessages}/>
          })}
        </div>
      )
    }
  }

  handleLogOut () {
    this.props.logout();
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
              </span>
              <span className="textChannelNavBarTitleBox">
                <span className="textChannelNavBarTitle">
                  <span>Text Channels</span>
                </span>
              </span>
              {this.waitForTextChannels()}
            </div>
            <div className="navBarCurrentUserOuterBox">
              <div className="navBarCurrentUserLeftBox">
                <div className="currentLogoBox">
                  <div className="guestLogo">
                    <div>G</div>
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
          <div className="createTextChannelFormBoxOuter">
            {this.createTextChannelForm()}
          </div>
        </div>
        { children }
      </div>
    );
  }
}

export default withRouter(TextChannelNav);
