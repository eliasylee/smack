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
  }

  handleSubmit (e) {
    e.preventDefault();
    const { subscriptions, username, channel } = this.props;

    let usernames = [];
    Object.keys(subscriptions).forEach( key => {
      usernames.push(subscriptions[key].username)
    });

    if (!usernames.includes(this.state.username) && username !== "") {
      let subscription = this.state;
      subscription.channel_id = channel.id;
      this.props.createSubscription({ subscription });
      this.setState({ "username": "" })
    }
  }

  updateState (property) {
    return e => this.setState({[property]: e.target.value});
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
                       value={this.state.username} />
              </div>
              <input className="subscriptionSubmitButton" type="submit" value="^" />
            </div>
        </form>
      )
    }
  }

  render () {
    const { subscriptions } = this.props;
    let subKeys = Object.keys(subscriptions);
    return (
      <div className="subscriptionsBox">
        <div className="subscriptionTop">
          <div className="subscriptionHeader">Channel Members</div>
          <div className="subscriptionsList">
            { subKeys.map( subKey => {
              return <ChannelSubscriptionsItem subscription={subscriptions[subKey]}
                                               destroySubscription={this.props.destroySubscription}
                                               currentUser={this.props.currentUser}
                                               channel={this.props.channel}
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
