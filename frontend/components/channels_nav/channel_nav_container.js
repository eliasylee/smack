import { connect } from 'react-redux';
import ChannelNav from './channel_nav';
import { fetchAllChannels, createChannel, clearTextChannels } from '../../actions/channel_actions';
import { clearTextMessages } from '../../actions/message_actions';
import { fetchAllDirectMessages } from '../../actions/direct_message_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  channels: state.channels.channels,
  stateChannel: state.channel.channel,
  errors: state.channel.errors,
  path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
  fetchAllChannels: () => dispatch(fetchAllChannels()),
  createChannel: channel => dispatch(createChannel(channel)),
  clearTextChannels: () => dispatch(clearTextChannels()),
  clearTextMessages: () => dispatch(clearTextMessages()),
  fetchAllDirectMessages: () => dispatch(fetchAllDirectMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelNav);
