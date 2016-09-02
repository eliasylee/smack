import { connect } from 'react-redux';
import TextChannelChat from './text_channel_chat';
import { createMessage,
         updateMessage,
         destroyMessage } from '../../actions/message_actions';;

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  messages: state.text_channel.attachments,
  errors: state.text_channel.errors
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  updateMessage: message => dispatch(updateMessage(message)),
  destroyMessage: message => dispatch(destroyMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelChat);
