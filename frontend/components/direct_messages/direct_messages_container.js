import { connect } from 'react-redux';
import DirectMessages from './direct_messages';
import { fetchOneDirectMessage,
         createDirectMessage } from '../../actions/direct_message_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  directMessages: state.directMessages,
  stateDirectMessage: state.directMessage
});

const mapDispatchToProps = dispatch => ({
  createDirectMessage: username => dispatch(createDirectMessage(username)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
