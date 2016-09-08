import { connect } from 'react-redux';
import { createDirectChatMessage,
         updateDirectChatMessage,
         destroyDirectChatMessage } from '../../actions/direct_chat_message_actions';
import DirectChatMessage from './direct_chat_message';
import { fetchOneDirectMessage } from '../../actions/direct_message_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  directMessage: state.directMessage,
  directChatMessages: state.directMessage.messages
});

const mapDispatchToProps = dispatch => ({
  destroyDirectChatMessage: directChatMessage => dispatch(destroyDirectChatMessage(directChatMessage)),
  fetchOneDirectMessage: directMessage => dispatch(fetchOneDirectMessage(directMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectChatMessage);
