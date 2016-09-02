import { connect } from 'react-redux';
import ChannelNav from './channel_nav';
import { createChannel, clearTextChannels } from '../../actions/channel_actions';

const mapStateToProps = state => ({
  channels: state.channels.channels,
  errors: state.channel.errors
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  clearTextChannels: () => dispatch(clearTextChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelNav);
