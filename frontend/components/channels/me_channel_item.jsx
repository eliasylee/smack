import React from 'react';
import { withRouter } from 'react-router';

const changeChannel = (router) => (
  () => router.push(`/channels/me`)
);

const MeChannelItem = ({ channel, router }) => {
  return (
    <button onClick={changeChannel(router)} className="personalChannelButton">
      <img src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png" alt="personal-channel-icon" />
    </button>
  )
}

export default withRouter(MeChannelItem);
