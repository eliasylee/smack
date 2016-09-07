import { connect } from 'react-redux';
import DirectMessages from './direct_messages';
import { fetchOneDirectMessage,
         createDirectMessage } from '../../actions/direct_message_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  directMessages: state.directMessages,
  stateDirectmessage: state.directMessage
});

const mapDispatchToProps = dispatch => ({
  createDirectMessage: username => dispatch(createDirectMessage(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
