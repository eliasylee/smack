import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import ChannelsReducer from './channels_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelsReducer,
  channel: ChannelReducer
});

export default RootReducer;
