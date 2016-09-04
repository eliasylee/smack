import { connect } from 'react-redux';
import ChannelNav from './channel_nav';
import { createChannel, clearTextChannels } from '../../actions/channel_actions';
import { clearTextMessages } from '../../actions/message_actions';

const mapStateToProps = state => ({
  channels: state.channels.channels,
  stateChannel: state.channel.channel,
  errors: state.channel.errors
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  clearTextChannels: () => dispatch(clearTextChannels()),
  clearTextMessages: () => dispatch(clearTextMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelNav);
