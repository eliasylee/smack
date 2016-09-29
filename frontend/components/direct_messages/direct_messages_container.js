import { connect } from 'react-redux';
import DirectMessages from './direct_messages';
import { fetchOneDirectMessage,
         createDirectMessage,
         dismountDirectMessage,
         destroyDirectMessage,
         clearDirectMessageErrors } from '../../actions/direct_message_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  directMessages: state.directMessages,
  stateDirectMessage: state.directMessage,
  errors: state.directMessage.errors
});

const mapDispatchToProps = dispatch => ({
  createDirectMessage: username => dispatch(createDirectMessage(username)),
  dismountDirectMessage: () => dispatch(dismountDirectMessage()),
  destroyDirectMessage: directMessage => dispatch(destroyDirectMessage(directMessage)),
  clearDirectMessageErrors: () => dispatch(clearDirectMessageErrors()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
