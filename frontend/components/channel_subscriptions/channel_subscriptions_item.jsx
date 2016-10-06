import React from 'react';
import { withRouter } from 'react-router';

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
    const { currentUser, subscription, router } = this.props;
    if (currentUser.id === subscription.user_id ) {
      () => router.push(`/channels/@me`)
    }
    this.props.destroySubscription(subscription.id)
  }

  placeDestroyButton () {
    const { currentUser, subscription, channel, admin } = this.props;
    if (currentUser.id === subscription.user_id ||
        currentUser.id === channel.admin.id) {
      if (!admin) {
        return (
          <div className="destroySubscriptionBox">
            <button className="destroySubscriptionButton"
                    onClick={this.handleDestroy}><i className="fa fa-ban" aria-hidden="true"></i></button>
          </div>
        )
      }
    }
  }

  idCreator (color) {
    switch (color) {
      case "E6544A":
        return "cE6544A";
      case "FAA61A":
        return "cFAA61A";
      case "7289DA":
        return "c7289DA";
      case "43B581":
        return "c43B581";
      case "593695":
        return "c593695";
      case "992D22":
        return "c992D22";
      case "3498DB":
        return "c3498DB";
      case "1F8B4C":
        return "c1F8B4C";
    }
  }

  render () {
    const { subscription } = this.props;
    let username = subscription.username;

    return (
      <div className="channelSubscriptionBar">
        <div className="logoAndUsername">
          <div className="subUserLogo">
            <div className="userLogo" id={this.idCreator(subscription.color)}>
              <div className="userLogoLetter">{this.prepUserName(username)}</div>
            </div>
          </div>
          <div className="userUsername">
            {username}
          </div>
        </div>
        {this.placeDestroyButton()}
      </div>
    )
  }
}

export default withRouter(ChannelSubscriptionsItem);
