import React from 'react';
import ChannelNavItem from './channel_nav_item';
import MeChannelItem from './me_channel_item';
import { withRouter } from 'react-router';

class ChannelNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      icon_url: "",
      view: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.renderNewChannelForm = this.renderNewChannelForm.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.title !== "") {
      const channel = Object.assign({}, this.state);
      this.props.createChannel({channel});
      this.toggleView();
    }
  }

  toggleView () {
    let nextView = !this.state.view;
    if (!nextView) {
      this.setState({
        "title": "",
        "description": "",
        "icon_url": ""
      })
    }
    this.setState({ "view": nextView });
  }

  updateState (property) {
    return e => this.setState({[property]: e.target.value});
  }

  createChannelForm () {
    return (
      <div className="createChannelFormBoxOuter">
        <div className="createChannelFormBoxInner">
          <form onSubmit={this.handleSubmit} className="createChannelForm">
            <div className="createChannelTitle">Create Channel</div>
            <div className="createChannelNameBox">
              <div className="channelWord">Channel Name</div>
              <div className="titleInputLine">
                <input type="text"
                  value={this.state.title}
                  onChange={this.updateState("title")}
                  className="channelInput" />
              </div>
            </div>
            <div className="createChannelDescriptionBox">
              <div className="descriptionWord">Description</div>
              <div className="descriptionInputLine">
                <input type="text"
                  value={this.state.description}
                  onChange={this.updateState("description")}
                  className="channelInput" />
              </div>
            </div>
            <div className="createChannelUrlBox">
              <div className="iconurlWord">Icon URL</div>
              <div className="urlInputLine">
                <input type="text"
                  value={this.state.icon_url}
                  onChange={this.updateState("icon_url")}
                  className="channelInput" />
              </div>
            </div>
            <div className="channelSubmitBox">
              <input className="channelSubmitButton"
                     type="submit"
                     value="CREATE" />
              <span className="closeCreateChannelForm"
                    onClick={this.toggleView}>x</span>
            </div>
          </form>
        </div>
      </div>
    )
  }

  renderNewChannelForm () {
    if (this.state.view) {
      return this.createChannelForm();
    }
  }

  render () {
    const { stateChannel, channels, children, clearTextChannels, clearTextMessages } = this.props;
    let channelKeys = Object.keys(channels);
    return (
      <div className="mainView">
        <div className="channelNavBarBackground">
          <div className="channelNavBar">
            <div className="meChannelButtonBox">
              <MeChannelItem />
            </div>
            <div className="navBarSeparator"></div>
            <div className="channelNavBarButtons">
              {channelKeys.map( channelKey => {
                return <ChannelNavItem channel={channels[channelKey]}
                                       stateChannel={stateChannel}
                                       clearTextChannels={clearTextChannels}
                                       clearTextMessages={clearTextMessages}
                                       key={channelKey} />
              })}
            </div>
            <div className="createChannelButtonBox">
              <button className="createChannelButton" onClick={this.toggleView}>
                <div className="createChannelPlus">+</div>
              </button>
            </div>
            {this.renderNewChannelForm()}
          </div>
        </div>
        {children}
      </div>
    );
  }
}

export default withRouter(ChannelNav);
