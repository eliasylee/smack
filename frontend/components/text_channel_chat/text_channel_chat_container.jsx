import { connect } from 'react-redux';
import TextChannelChat from './text_channel_chat';
import { createMessage,
         updateMessage,
         destroyMessage } from '../../actions/message_actions';;

const mapStateToProps = state => ({
  textChannel: state.textChannel.textChannel,
  currentUser: state.session.currentUser,
  messages: state.textChannel.textChannel.attachments,
  errors: state.textChannel.errors
});

const mapDispatchToProps = dispatch => ({
  destroyMessage: message => dispatch(destroyMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelChat);
