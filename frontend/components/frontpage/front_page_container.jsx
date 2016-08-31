import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions';
import FrontPage from './front_page';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

export default connect(
  mapStateToProps
)(FrontPage)
