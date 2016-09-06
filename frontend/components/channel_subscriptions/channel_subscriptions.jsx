import React from 'react';
import ChannelSubscriptionsItem from './channel_subscriptions_item';

class ChannelSubscriptions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      channel_id: this.props.channel.id,
      username: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSubscriptionForm = this.renderSubscriptionForm.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    let subscription = this.state;
    this.props.createSubscription({ subscription });
  }

  updateState (property) {
    return e => this.setState({[property]: e.target.value});
  }

  renderSubscriptionForm () {
    if (this.props.currentUser.id === this.props.channel.admin.id) {
      return (
        <form onSubmit={this.handleSubmit} className="subscriptionForm">
          <div className="subscriptionFormTitle">Add Member</div>
          <div className="subscriptionUsernameBox">
            <div className="subscriptionUsernameWord">Username:</div>
            <input type="text"
                   className="subscriptionUsernameInput"
                   onChange={this.updateState("username")}
                   value={this.state.username} />
          </div>
          <input className="textMessageSubmitButton" type="submit" value="^" />
        </form>
      )
    }
  }

  render () {
    const { subscriptions } = this.props;
    let subKeys = Object.keys(subscriptions);
    return (
      <div className="subscriptionsBox">
        <div className="subscriptionHeader">Channel Members</div>
        {this.renderSubscriptionForm()}
        <div className="subscriptionsList">
          { subKeys.map( subKey => {
            return <ChannelSubscriptionsItem subscription={subscriptions[subKey]}
                                             destroySubscription={this.props.destroySubscription}
                                             key={subKey} />
          })}
        </div>
      </div>
    )
  }
}

export default ChannelSubscriptions;
