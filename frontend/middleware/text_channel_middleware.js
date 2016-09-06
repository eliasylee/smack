import { TextChannelConstants,
         receiveOneTextChannel,
         receiveNewTextChannel,
         receiveTextChannelErrors } from '../actions/text_channel_actions';
import { fetchOneTextChannel,
         createTextChannel,
         updateTextChannel,
         destroyTextChannel } from '../util/text_channel_api_util';

const TextChannelMiddleware = ({ dispatch }) => next => action => {
  const fetchOneSuccess = data => dispatch(receiveOneTextChannel(data));
  const createTextChannelSuccess = data => dispatch(receiveNewTextChannel(data));
  const updateTextChannelSuccess = data => dispatch(receiveOneTextChannel(data));
  const errors = data => dispatch(receiveTextChannelErrors(data));
  switch (action.type) {
    case TextChannelConstants.FETCH_ONE_TEXT_CHANNEL:
      fetchOneTextChannel(action.textChannel, fetchOneSuccess, errors);
      return next(action);
    case TextChannelConstants.CREATE_TEXT_CHANNEL:
      createTextChannel(action.textChannel, createTextChannelSuccess, errors);
      break;
    case TextChannelConstants.UPDATE_TEXT_CHANNEL:
      updateTextChannel(action.textChannel, updateTextChannelSuccess, errors);
      return next(action);
    case TextChannelConstants.DESTROY_TEXT_CHANNEL:
      destroyTextChannel(action.textChannel, () => next(action), errors);
      break;
    default:
      return next(action);
  }
};

export default TextChannelMiddleware;
