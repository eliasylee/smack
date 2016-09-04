import React from 'react';
import { withRouter } from 'react-router';

const prepChannelName = (channel) => {
  let result = "";
  channel.title.split.forEach( word => {
    result += word.slice(0, 1);
  });
  return result;
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

const changeChannel = (stateChannel, channel, router, clearTextChannels, clearTextMessages) => (
  () => {
    clearTextChannels();
    clearTextMessages();
    router.push(`/channels/${channel.id}/${stateChannel.attachments[0].id}`)
  }
);

const ChannelNavItem = ({ stateChannel, channel, router, clearTextChannels, clearTextMessages }) => {
  if (channel.icon_url) {
    return (
      <div className="channelButtonBox" >
        <button onClick={changeChannel(stateChannel, channel, router, clearTextChannels, clearTextMessages )} className="channelButton">
                <img src={channel.icon_url}
                     alt="channel-button"
                     height="50"
                     size="50"
                     className="channelNavBarButtonImage"/>
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
