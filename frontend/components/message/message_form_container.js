import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage,
         updateMessage } from '../../actions/message_actions';;

const mapStateToProps = (state, ownProps) => {
  let tempErrors = [];
  if (state.textChannel) {
    tempErrors = state.textChannel.errors
  }

  return {
    chatType: ownProps.chatType,
    chatId: ownProps.chatId,
    messageBody: ownProps.messageBody,
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
