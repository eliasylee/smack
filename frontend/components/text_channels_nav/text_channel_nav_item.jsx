import React from 'react';
import { withRouter } from 'react-router';

const changeTextChannel = (textChannel, channelId, router, clearTextMessages) => (
  () => {
    clearTextMessages();
    router.push(`/channels/${channelId}/${textChannel.id}`);
  }
)

const TextChannelNavItem = ({ textChannel, channelId, router, clearTextMessages }) => {
  return (
    <button onClick={changeTextChannel(textChannel, channelId, router, clearTextMessages)} className="textChannelButton">
      <ul>#</ul>
      <ul>{textChannel.title}</ul>
    </button>
  )
}

export default withRouter(TextChannelNavItem);
