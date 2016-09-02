import { connect } from 'react-redux';
import TextChannelChat from './text_channel_chat';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  textChannel: state.text_channel.text_channel,
  messages: state.text_channel.text_channel.messages,
  errors: state.text_channel.errors
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextChannelChat);
