import { ChannelConstants,
         receiveAllChannels,
         receiveOneChannel,
         receiveNewChannel,
         receiveChannelErrors } from '../actions/channel_actions';
import { fetchAllChannels,
         fetchOneChannel,
         createChannel,
         updateChannel,
         destroyChannel } from '../util/channel_api_util';

const ChannelMiddleware = ({ dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveAllChannels(data));
  const fetchOneSuccess = data => dispatch(receiveOneChannel(data));
  const createChannelSuccess = data => dispatch(receiveNewChannel(data));
  const updateChannelSuccess = data => dispatch(receiveOneChannel(data));
  const errors = data => dispatch(receiveChannelErrors(data));
  switch (action.type) {
    case ChannelConstants.FETCH_ALL_CHANNELS:
      fetchAllChannels(fetchAllSuccess, errors);
      return next(action);
    case ChannelConstants.FETCH_ONE_CHANNEL:
      fetchOneChannel(action.channel, fetchOneSuccess, errors);
      return next(action);
    case ChannelConstants.CREATE_CHANNEL:
      createChannel(action.channel, createChannelSuccess, errors);
      return next(action);
    case ChannelConstants.UPDATE_CHANNEL:
      updateChannel(action.channel, updateChannelSuccess, errors);
      return next(action);
    case ChannelConstants.DESTROY_CHANNEL:
      destroyChannel(action.channel, () => next(action), errors);
      break;
    default:
      return next(action);
  }
};

export default ChannelMiddleware;
