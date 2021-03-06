import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage,
         updateMessage } from '../../actions/message_actions';
import { createDirectChatMessage,
         updateDirectChatMessage } from '../../actions/direct_chat_message_actions';

const mapStateToProps = (state, ownProps) => {
  let tempErrors = [];
  if (state.textChannel) {
    tempErrors = state.textChannel.errors;
  }

  return {
    chatType: ownProps.chatType,
    chatId: ownProps.chatId,
    messageId: ownProps.messageId || 0,
    messageBody: ownProps.messageBody || "",
    textChannelTitle: ownProps.textChannelTitle,
    action: ownProps.action,
    toggleUpdate: ownProps.toggleUpdate,
    errors: tempErrors
  }
};

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  updateMessage: message => dispatch(updateMessage(message)),
  createDirectChatMessage: message => dispatch(createDirectChatMessage(message)),
  updateDirectChatMessage: message => dispatch(updateDirectChatMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
