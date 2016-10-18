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
      let words = channel.title.split(" ");
      words = words.slice(0, 2);
      words.forEach( word => { result += word.slice(0, 1) })
      return result;
    }
  }

  prepChannelTitle (channel) {
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

  isActiveChannelBar (stateChannel, channel, path) {
    if (!path.includes("@me") && channel.id === stateChannel.id) {
      return "activeChannelBar";
    } else {
      return "inactiveChannelBar";
    }
  }

  changeChannel () {
    const { channel, stateChannel, router, clearTextChannels, clearTextMessages } = this.props;
    if (channel.id !== stateChannel.id) {
      clearTextChannels();
      let txts = channel.attachments;
      router.push(`/channels/${channel.id}/${txts[txts.length - 1].id}`)
    }
  };

  isActiveText (stateChannel, channel, path) {
    if (channel.id === stateChannel.id && !path.includes("@me")) {
      return "activeText";
    } else {
      return "inactiveText";
    }
  }

  channelIconOrText (stateChannel, channel, router, path) {
    if (channel.icon_url === "") {
      return (
        <div className={this.isActiveText(stateChannel, channel, path)}>
          {this.prepChannelName(channel)}
        </div>
      )
    } else {
      return (
        <img src={channel.icon_url}
          alt="channel-button"
          className={this.isActive(stateChannel, channel)}/>
      )
    }
  }

  render () {
    const { stateChannel, channel, router, clearTextChannels, clearTextMessages, path } = this.props;
    return (
      <div className="channelButtonBox" >
        <div className={this.isActiveChannelBar(stateChannel, channel, path)}></div>
        <button onClick={this.changeChannel}
                className="channelButton"
                disabled={this.isDisabled(stateChannel, channel, path)} >
        {this.channelIconOrText(stateChannel, channel, router, path)}
        </button>
        <span className="channelNavHover">{this.prepChannelTitle(channel)}</span>
      </div>
    )
  }
}

export default withRouter(ChannelNavItem);
