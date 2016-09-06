import { connect } from 'react-redux';
import ChannelSubscriptions from './channel_subscriptions';
import { createSubscription, destroySubscription } from '../../actions/subscription_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  channel: state.channel.channel,
  subscriptions: state.subscriptions
});

const mapDispatchToProps = dispatch => ({
  createSubscription: subscription => dispatch(createSubscription(subscription)),
  destroySubscription: subscription => dispatch(destroySubscription(subscription))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelSubscriptions);
