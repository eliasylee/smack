import React from 'react';
import ChannelSubscriptionsItem from './channel_subscriptions_item';

class ChannelSubscriptions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      channel_id: 0,
      username: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSubscriptionForm = this.renderSubscriptionForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const { subscriptions, username, channel } = this.props;

    let usernames = [];
    Object.keys(subscriptions).forEach( key => {
      usernames.push(subscriptions[key].username);
    });

    if (!usernames.includes(this.state.username) && username !== "") {
      let subscription = this.state;
      subscription.channel_id = channel.id;
      this.props.createSubscription({ subscription });
      this.setState({ "username": "" });
      this.props.clearSubscriptionErrors();
    }
  }

  updateState (property) {
    return e => this.setState({ [property]: e.target.value });
  }

  renderErrors () {
    let subs = this.props.subscriptions;
    if (subs['errors']) {
      return subs['errors'];
    }
  }

  renderSubscriptionForm () {
    if (this.props.currentUser.id === this.props.channel.admin.id) {
      return (
        <form onSubmit={this.handleSubmit} className="subscriptionForm">
          <div className="subscriptionFormTitle">Add Member</div>
            <div className="subscriptionInput">
              <div className="subscriptionUsernameBox">
                <input type="text"
                       className="subscriptionUsernameInput"
                       onChange={this.updateState("username")}
                       placeholder={this.renderErrors()}
                       value={this.state.username} />
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
            </div>
        </form>
      )
    }
  }

  excludeErrors (key) {
    if (key !== 'errors') {
      return key;
    }
  }

  renderAdmin (admin) {
    const { subscriptions } = this.props;
    let subKeys = Object.keys(subscriptions).filter(this.excludeErrors);
    if (subKeys[0]) {
      let admin = subKeys[0]
      return (
        <ChannelSubscriptionsItem subscription={subscriptions[admin]}
                                  destroySubscription={this.props.destroySubscription}
                                  currentUser={this.props.currentUser}
                                  channel={this.props.channel}
                                  admin={true}
                                  key={admin} />
      )
    }
  }

  render () {
    const { subscriptions } = this.props;
    let subKeys = Object.keys(subscriptions).filter(this.excludeErrors);
    let admin = subKeys[0] || [];
    let members = subKeys.slice(1, subKeys.length) || [];

    return (
      <div className="subscriptionsBox">
        <div className="subscriptionTop">
          <div className="subscriptionAdminBox">Channel Admin</div>
          <div className="subscriptionAdmin">
            {this.renderAdmin(admin)}
          </div>
          <div className="subscriptionHeader">Channel Members</div>
          <div className="subscriptionsList">
            { members.map( subKey => {
              return <ChannelSubscriptionsItem subscription={subscriptions[subKey]}
                                               destroySubscription={this.props.destroySubscription}
                                               currentUser={this.props.currentUser}
                                               channel={this.props.channel}
                                               admin={false}
                                               key={subKey} />
            })}
          </div>
        </div>
        <div className="subscriptionFormBox">
          {this.renderSubscriptionForm()}
        </div>
      </div>
    )
  }
}

export default ChannelSubscriptions;
