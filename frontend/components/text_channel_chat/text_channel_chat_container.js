import { connect } from 'react-redux';
import { createMessage,
         updateMessage,
         destroyMessage } from '../../actions/message_actions';
import TextChannelChat from './text_channel_chat';
import { fetchOneTextChannel } from '../../actions/text_channel_actions';

const mapStateToProps = state => ({
  channel: state.channel.channel,
  textChannel: state.textChannel.textChannel,
  currentUser: state.session.currentUser,
  messages: state.textChannel.textChannel.messages,
  errors: state.textChannel.errors
});

const mapDispatchToProps = dispatch => ({
  destroyMessage: message => dispatch(destroyMessage(message)),
  fetchOneTextChannel: textChannel => dispatch(fetchOneTextChannel(textChannel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelChat);
