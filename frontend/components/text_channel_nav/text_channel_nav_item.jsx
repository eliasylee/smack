import React from 'react';
import { withRouter } from 'react-router';

const changeTextChannel = (textChannel, channelId, router) => (
  () => router.push(`/channels/${channelId}/${textChannel.id}`)
);

const TextChannelNavItem = ({ textChannel, channelId, router }) => {
  return (
    <button onClick={changeTextChannel(textChannel, channelId, router)} className="textChannelButton">
      <span>#{textChannel.title}</span>
    </button>
  )
}

export default withRouter(TextChannelNavItem);
