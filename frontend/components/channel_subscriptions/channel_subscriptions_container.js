import { connect } from 'react-redux';
import ChannelSubscriptions from './channel_subscriptions';
import { createSubscription,
         destroySubscription,
         clearSubscriptionErrors } from '../../actions/subscription_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  channel: state.channel.channel,
  textChannel: state.textChannel.textChannel,
  subscriptions: state.subscriptions
});

const mapDispatchToProps = dispatch => ({
  createSubscription: subscription => dispatch(createSubscription(subscription)),
  destroySubscription: subscription => dispatch(destroySubscription(subscription)),
  clearSubscriptionErrors: () => dispatch(clearSubscriptionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelSubscriptions);
