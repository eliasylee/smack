import { connect } from 'react-redux';
import ChannelNav from './channel_nav';
import { fetchOneChannel,
         createChannel,
         fetchPersonalChannel } from '../../actions/channel_actions';

const mapStateToProps = state => ({
  channels: state.channels,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchOneChannel: channel => dispatch(fetchOneChannel(channel)),
  createChannel: channel => dispatch(createChannel(channel)),
  fetchPersonalChannel: channel => dispatch(fetchPersonalChannel())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelNav);
