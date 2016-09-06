import React from 'react';
import { withRouter } from 'react-router';

class ChannelNavItem extends React.Component {
  constructor (props) {
    super(props);
    this.changeChannel = this.changeChannel.bind(this);
  }

  prepChannelName (channel) {
    if (channel.title) {
      let result = "";
      channel.title.split(" ").forEach( word => { result += word.slice(0, 1) })
      return result.toUpperCase();
    }
  }

  prepChannelLength (channel) {
    let title = channel.title;

    if (title.length < 13) {
      return title
    } else {
      let newTitle = title.slice(0, 10);
      newTitle += "...";
      return newTitle;
    }
  }

  isDisabled (stateChannel, channel) {
    if (channel.id === stateChannel.id) {
      return "disabled";
    } else {
      return "";
    }
  }

  isActive (stateChannel, channel) {
    if (channel.id === stateChannel.id) {
      return "activeChannelNavBarButtonImage";
    } else {
      return "inactiveChannelNavBarButtonImage";
    }
  }

  isActiveChannelBar (stateChannel, channel) {
    if (channel.id === stateChannel.id) {
      return "activeChannelBar";
    } else {
      return "inactiveChannelBar";
    }
  }

  changeChannel (channel, stateChannel, router, clearTextChannels, clearTextMessages) {
    if (channel.id !== stateChannel.id) {
      clearTextChannels();
      this.props.router.push(`/channels/${channel.id}/${channel.attachments[0].id}`)
    }
  };

  isActiveText (stateChannel, channel) {
    if (channel.id === stateChannel.id) {
      return "activeText";
    } else {
      return "inactiveText";
    }
  }

  channelIconOrText (stateChannel, channel, router) {
    if (channel.icon_url) {
      return (
        <img src={channel.icon_url}
             alt="channel-button"
             className={this.isActive(stateChannel, channel)}/>
      )
    } else {
      return (
        <div onClick={this.changeChannel(channel, router)} className={this.isActiveText(stateChannel, channel)}>
          {this.prepChannelName(channel)}
        </div>
      )
    }
  }

  render () {
    const { stateChannel, channel, router, clearTextChannels, clearTextMessages } = this.props;
    return (
      <div className="channelButtonBox" >
        <div className={this.isActiveChannelBar(stateChannel, channel)}></div>
        <button onClick={this.changeChannel(channel, stateChannel, router, clearTextChannels, clearTextMessages)}
                className="channelButton"
                disabled={this.isDisabled(stateChannel, channel)} >
                {this.channelIconOrText(stateChannel, channel, router)}
        </button>
        <span className="channelNavHover">{this.prepChannelLength(channel)}</span>
      </div>
    )
  }
}

export default withRouter(ChannelNavItem);
