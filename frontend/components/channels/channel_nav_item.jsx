import React from 'react';
import { withRouter } from 'react-router';

const prepChannelName = (channel) => {
  let result = "";
  channel.title.split.forEach( word => {
    result += word.slice(0, 1);
  });
  return result;
}

const changeChannel = (channel) => {
  this.props.router.push({
    pathname: `/channels/${channel.id}`
  });
}

const ChannelNavItem = ({ channel }) => {
  if (channel.icon_url) {
    return (
      <button onClick={changeChannel(channel)} className="channelButton">
              <img src={channel.icon_url} alt="channel-button" />
      </button>
    )
  } else {
    return (
      <button onClick={changeChannel(channel)} className="channelButton">
        {this.prepChannelName(channel)}
      </button>
    )
  }
}

export default withRouter(ChannelNavItem);
