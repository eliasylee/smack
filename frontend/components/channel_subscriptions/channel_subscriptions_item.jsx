import React from 'react';

class ChannelSubscriptionsItem extends React.Component {
  constructor (props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  prepUserName (username) {
    let result = "";
    if (username) {
      username.split(" ").forEach( word => {
        result += word.slice(0, 1);
      });
    }
    return result;
  }

  handleDestroy () {
    this.props.destroySubscription(this.props.subscription.id)
  }

  render () {
    const { subscription } = this.props;
    let username = subscription.username;

    return (
      <div className="channelSubscriptionBar">
        <div className="userLogo">
          <div className="userLogoLetter">{this.prepUserName(username)}</div>
        </div>
        <div className="userUsername">
          {username}
        </div>
        <div className="destroySubscriptionBox">
          <button className="destroySubscriptionButton"
                  onClick={this.handleDestroy}>x</button>
        </div>
      </div>
    )
  }
}

export default ChannelSubscriptionsItem;
