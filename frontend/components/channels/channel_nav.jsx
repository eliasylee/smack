import React from 'react';
import ChannelNavItem from './channel_nav_item';
import MeChannelItem from './me_channel_item';

class ChannelNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      icon_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state);
    this.props.createChannel({channel});
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

  createChannelForm () {
    return (
      <div className="createChannelFormBoxInner">
        <span className="closeCreateChannelForm">x</span>
        <form onClick={this.handleSubmit} className="createChannelForm">
          <div className="createChannelNameBox">
            {this.renderTitleTitle()}
            <div className="titleInputLine">
              <input type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="sessionInput" />
            </div>
          </div>
          <div className="createChannelDescriptionBox">
            <div className="descriptionWord">Description</div>
            <div className="descriptionInputLine">
              <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="channelInput" />
            </div>
          </div>
          <div className="createChannelUrlBox">
            <div className="iconurlWord">Icon URL</div>
            <div className="urlInputLine">
              <input type="text"
                value={this.state.icon_url}
                onChange={this.update("icon_url")}
                className="channelInput" />
            </div>
          </div>
          <div className="channelSubmitBoxOuter">
            <div className="channelSubmitBoxInner">
              <input className="channelSubmitButton" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    )
  }

  render () {
    const { channels, children } = this.props;
    return (
      <div className="channelTextChannelBox">
        <div className="channelNavBarBackground">
          <div className="channelNavBar">
            <div className="meChannelButtonBox">
              <MeChannelItem />
            </div>
            <div className="navBarSeparator">
            </div>
            <div className="channelNavBarButtons">
              {channels.map( channel => {
                return <ChannelNavItem channel={channel} key={channel.id} />
              })}
            </div>
            <div className="createChannelButtonBox">
              <button className="createChannelButton">+</button>
            </div>
          </div>
          <div className="createChannelFormBoxOuter">
            {this.createChannelForm()}
          </div>
        </div>
        {children}
      </div>
    );
  }
}

export default ChannelNav;
