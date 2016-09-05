import { connect } from 'react-redux';
import TextChannelNav from './text_channel_nav';
import { createTextChannel, updateTextChannel } from '../../actions/text_channel_actions';
import { logout } from '../../actions/session_actions';
import { clearTextMessages } from '../../actions/message_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  channel: state.channel.channel,
  stateTextChannel: state.textChannel.textChannel,
  textChannels: state.channel.channel.attachments,
  errors: state.channel.errors
});

const mapDispatchToProps = dispatch => ({
  createTextChannel: textChannel => dispatch(createTextChannel(textChannel)),
  updateTextChannel: textChannel => dispatch(updateTextChannel(textChannel)),
  clearTextMessages: () => dispatch(clearTextMessages()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelNav);
