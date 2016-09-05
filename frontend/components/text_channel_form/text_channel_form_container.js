import { connect } from 'react-redux';
import { updateTextChannel } from '../../actions/text_channel_actions';;
import TextChannelForm from './text_channel_form';

const mapStateToProps = (state, ownProps) => {
  let tempErrors = [];
  if (state.textChannel) {
    tempErrors = state.textChannel.errors;
  }

  return {
    textChannel: ownProps.textChannel,
    currentUser: state.session.currentUser,
    errors: tempErrors
  }
};

const mapDispatchToProps = dispatch => ({
  updateTextChannel: message => dispatch(updateTextChannel(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelForm);
