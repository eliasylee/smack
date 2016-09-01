import React from 'react';
import { withRouter } from 'react-router';

const prepChannelName = (channel) => {
  let result = "";
  channel.title.split.forEach( word => {
    result += word.slice(0, 1);
  });
  return result;
}

const changeChannel = (channel, router) => (
  () => router.push(`/channels/${channel.id}`)
);

const ChannelNavItem = ({ channel, router }) => {
  if (channel.icon_url) {
    return (
      <div className="channelButtonBox" >
        <button onClick={changeChannel(channel, router)} className="channelButton">
                <img src={channel.icon_url}
                     alt="channel-button"
                     height="50"
                     size="50"
                     className="channelNavBarButtonImage"/>
        </button>
      </div>
    )
  } else {
    return (
      <button onClick={changeChannel(channel, router)} className="channelButton">
        {this.prepChannelName(channel)}
      </button>
    )
  }
}

export default withRouter(ChannelNavItem);
