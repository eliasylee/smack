import React from 'react';
import { withRouter } from 'react-router';

const prepChannelName = (channel) => {
  if (channel.title) {
    let result = "";
    channel.title.split(" ").forEach( word => {
      result += word.slice(0, 1);
    });
    result = result.toUpperCase();
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
    router.push(`/channels/${channel.id}/${channel.attachments[0].id}`)
  }
);

const isActiveText = (stateChannel, channel) => {
  if (channel.id === stateChannel.id) {
    return "activeText";
  } else {
    return "inactiveText";
  }
}

const channelIconOrText = (stateChannel, channel, router) => {
  if (channel.icon_url) {
    return (
      <img src={channel.icon_url}
           alt="channel-button"
           className={isActive(stateChannel, channel)}/>
    )
  } else {
    return (
      <div onClick={changeChannel(channel, router)} className={isActiveText(stateChannel, channel)}>
        {prepChannelName(channel)}
      </div>
    )
  }
}

const ChannelNavItem = ({ stateChannel, channel, router, clearTextChannels, clearTextMessages }) => {
  return (
    <div className="channelButtonBox" >
      <div className={isActiveChannelBar(stateChannel, channel)}></div>
      <button onClick={changeChannel(channel, router, clearTextChannels, clearTextMessages)}
              className="channelButton"
              disabled={isDisabled(stateChannel, channel)} >
              {channelIconOrText(stateChannel, channel, router)}
      </button>
      <span className="channelNavHover">{prepChannelLength(channel)}</span>
    </div>
  )
}

export default withRouter(ChannelNavItem);
