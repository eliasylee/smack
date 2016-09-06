import { connect } from 'react-redux';
import { createMessage,
         updateMessage,
         destroyMessage } from '../../actions/message_actions';
import TextChannelChat from './text_channel_chat';

const mapStateToProps = state => ({
  channel: state.channel.channel,
  textChannel: state.textChannel.textChannel,
  currentUser: state.session.currentUser,
  messages: state.textChannel.textChannel.messages,
  errors: state.textChannel.errors
});

const mapDispatchToProps = dispatch => ({
  destroyMessage: message => dispatch(destroyMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelChat);
