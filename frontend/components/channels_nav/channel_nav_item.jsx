import React from 'react';
import { withRouter } from 'react-router';

const prepChannelName = (channel) => {
  if (channel.title) {
    let result = "";
    channel.title.split.forEach( word => {
      result += word.slice(0, 1);
    });
    return result;
  }
}

const prepChannelLength = (channel) => {
  let title = channel.title;

  if (title.length < 13) {
    return title
  } else {
    let newTitle = title.slice(0, 10);
    newTitle += "...";
    return newTitle;
  }
}

const isDisabled = (stateChannel, channel) => {
  if (channel.id === stateChannel.id) {
    return "disabled";
  } else {
    return "";
  }
}

const isActive = (stateChannel, channel) => {
  if (channel.id === stateChannel.id) {
    return "activeChannelNavBarButtonImage";
  } else {
    return "inactiveChannelNavBarButtonImage";
  }
}

const isActiveChannelBar = (stateChannel, channel) => {
  if (channel.id === stateChannel.id) {
    return "activeChannelBar";
  } else {
    return "inactiveChannelBar";
  }
}

const changeChannel = (channel, router, clearTextChannels, clearTextMessages) => (
  () => {
    clearTextChannels();
    clearTextMessages();
    router.push(`/channels/${channel.id}/${channel.attachments[0].id}`)
  }
);

const ChannelNavItem = ({ stateChannel, channel, router, clearTextChannels, clearTextMessages }) => {
  if (channel.icon_url) {
    return (
      <div className="channelButtonBox" >
        <div className={isActiveChannelBar(stateChannel, channel)}></div>
        <button onClick={changeChannel(channel, router, clearTextChannels, clearTextMessages)}
                className="channelButton"
                disabled={isDisabled(stateChannel, channel)} >
                <img src={channel.icon_url}
                     alt="channel-button"
                     className={isActive(stateChannel, channel)}/>
        </button>
        <span className="channelNavHover">{prepChannelLength(channel)}</span>
      </div>
    )
  } else {
    return (
      <button onClick={changeChannel(channel, router)} className="channelButtonText">
        {prepChannelName(channel)}
      </button>
    )
  }
}

export default withRouter(ChannelNavItem);
