import React from 'react';
import { withRouter } from 'react-router';

const changeChannel = (router) => (
  () => router.push(`/channels/@me`)
);

const MeChannelItem = ({ channel, router }) => {
  return (
    <button onClick={changeChannel(router)} className="meChannelButton">
      <img src="fist-logo.svg"
           alt="personal-channel-icon"
           className="meChannelButtonImage"/>
    </button>
  )
}

export default withRouter(MeChannelItem);
