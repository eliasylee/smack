import { TextChannelConstants,
         receiveOneTextChannel,
         receiveErrors } from '../actions/text_channel_actions';
import { fetchOneTextChannel,
         createTextChannel,
         updateTextChannel } from '../util/text_channel_api_util';

const TextChannelMiddleware = ({ dispatch }) => next => action => {
  const fetchOneSuccess = data => dispatch(receiveOneTextChannel(data));
  const createTextChannelSuccess = data => dispatch(receiveOneTextChannel());
  const updateTextChannelSuccess = data => dispatch(receiveOneTextChannel());
  const errors = data => dispatch(receiveErrors(data));
  switch (action.type) {
    case TextChannelConstants.FETCH_ONE_TEXT_CHANNEL:
      fetchOneTextChannel(action.textChannel, fetchOneSuccess, errors);
      return next(action);
    case TextChannelConstants.CREATE_CHANNEL:
      createTextChannel(action.textChannel, createTextChannelSuccess, errors);
      return next(action);
    case TextChannelConstants.UPDATE_CHANNEL:
      updateTextChannel(action.textChannel, updateTextChannelSuccess, errors);
      return next(action);
    default:
      return next(action);
  }
};

export default TextChannelMiddleware;
