import React from 'react';
import { withRouter } from 'react-router';

const changeChannel = (router) => (
  () => router.push(`/channels/me`)
);

const MeChannelItem = ({ channel, router }) => {
  return (
    <button onClick={changeChannel(router)} className="meChannelButton">
      <img src="https://discordapp.com/assets/89576a4bb71f927eb20e8aef987b499b.svg"
           alt="personal-channel-icon"
           className="meChannelButtonImage"/>
    </button>
  )
}

export default withRouter(MeChannelItem);
