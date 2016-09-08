import React from 'react';
import { withRouter } from 'react-router';

const changeChannel = (router) => (
  () => router.push(`/channels/@me`)
);

const isActive = (path) => {
  if (path.includes("@me")) {
    return "activeMeChannelButton";
  } else {
    return "inactiveMeChannelButton";
  }
};

const isDisabled = (path) => {
  if (path.includes("@me")) {
    return "disabled";
  } else {
    return "";
  }
};

const MeChannelItem = ({ channel, router, path }) => {
  return (
    <button onClick={changeChannel(router)}
            disabled={isDisabled(path)}>
      <img src="white-logo-fist-small.png"
           alt="personal-channel-icon"
           className={isActive(path)}/>
    </button>
  )
}

export default withRouter(MeChannelItem);
