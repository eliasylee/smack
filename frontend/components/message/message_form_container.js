import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage,
         updateMessage } from '../../actions/message_actions';;

const mapStateToProps = (state, ownProps) => {
  let tempMessageBody = "";
  if (ownProps.messageBody) {
    tempMessageBody = ownProps.messageBody;
  }

  let tempErrors = [];
  if (state.textChannel) {
    tempErrors = state.textChannel.errors
  }

  return {
    currentUser: state.session.currentUser,
    chatType: ownProps.chatType,
    chatId: ownProps.chatId,
    messageBody: tempMessageBody,
    action: ownProps.action,
    errors: tempErrors
  }
};

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  updateMessage: message => dispatch(updateMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
