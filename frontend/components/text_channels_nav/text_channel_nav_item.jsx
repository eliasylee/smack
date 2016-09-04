import React from 'react';
import { withRouter } from 'react-router';

const isActive = (stateTextChannel, textChannel) => {
  if (textChannel.id === stateTextChannel.id) {
    return "activeTextChannelButton";
  } else {
    return "inactiveTextChannelButton";
  }
}

const isDisabled = (stateTextChannel, textChannel) => {
  if (textChannel.id === stateTextChannel.id) {
    return "disabled";
  } else {
    return "";
  }
}

const changeTextChannel = (textChannel, channelId, router, clearTextMessages) => (
  () => {
    clearTextMessages();
    router.push(`/channels/${channelId}/${textChannel.id}`);
  }
)

const TextChannelNavItem = ({ stateTextChannel, textChannel, channelId, router, clearTextMessages }) => {
  return (
    <button onClick={changeTextChannel(textChannel, channelId, router, clearTextMessages)}
            className={isActive(stateTextChannel, textChannel)}
            disabled={isDisabled(stateTextChannel, textChannel)}>
      <ul>#</ul>
      <ul>{textChannel.title}</ul>
    </button>
  )
}

export default withRouter(TextChannelNavItem);
