import React from 'react';
import { withRouter } from 'react-router';

const changeChannel = (router) => (
  () => router.push(`/channels/me`)
);

const MeChannelItem = ({ channel, router }) => {
  return (
    <button onClick={changeChannel(router)} className="meChannelButton">
      <img src="https://images.designtrends.com/wp-content/uploads/2016/01/12111017/Multiple-users-silhouettes.png"
           alt="personal-channel-icon"
           height="50"
           width="50"
           className="meChannelButtonImage"/>
    </button>
  )
}

export default withRouter(MeChannelItem);
