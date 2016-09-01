import { connect } from 'react-redux';
import ChannelNav from './channel_nav';
import { fetchAllChannels,
         fetchOneChannel,
         createChannel,
         fetchPersonalChannel } from '../../actions/channel_actions';

const mapStateToProps = state => ({
  channels: state.channels.channels,
  channel: state.channel.channel,
  errors: state.channel.errors
});

const mapDispatchToProps = dispatch => ({
  fetchOneChannel: channel => dispatch(fetchOneChannel(channel)),
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelNav);
