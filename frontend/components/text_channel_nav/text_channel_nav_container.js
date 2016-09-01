import { connect } from 'react-redux';
import TextChannelNav from './text_channel_nav';
import { createTextChannel } from '../../actions/text_channel_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  channel: state.channel.channel,
  textChannels: state.channel.channel.attachments,
  errors: state.channel.errors
});

const mapDispatchToProps = dispatch => ({
  createText: textChannel => dispatch(createTextChannel(textChannel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelNav);
