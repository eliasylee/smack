import React from 'react';
import { withRouter } from 'react-router';

const changeChannel = () => {
  this.props.router.push({
    pathname: `/channels/me`
  });
}

const MeChannelItem = () => {
  return (
    <button onClick={changeChannel()} className="personalChannelButton">
      <img src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png" alt="personal-channel-icon" />
    </button>
  )
}

export default withRouter(MeChannelItem);
