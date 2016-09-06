import { connect } from 'react-redux';
import TextChannelNav from './text_channel_nav';
import { destroyChannel } from '../../actions/channel_actions';
import { createTextChannel,
         updateTextChannel,
         destroyTextChannel } from '../../actions/text_channel_actions';
import { logout } from '../../actions/session_actions';
import { clearTextMessages } from '../../actions/message_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  channel: state.channel.channel,
  stateTextChannel: state.textChannel.textChannel,
  textChannels: state.channel.channel.textChannels,
  errors: state.channel.errors
});

const mapDispatchToProps = dispatch => ({
  createTextChannel: textChannel => dispatch(createTextChannel(textChannel)),
  updateTextChannel: textChannel => dispatch(updateTextChannel(textChannel)),
  destroyTextChannel: textChannel => dispatch(destroyTextChannel(textChannel)),
  destroyChannel: channel => dispatch(destroyChannel(channel)),
  clearTextMessages: () => dispatch(clearTextMessages()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelNav);
