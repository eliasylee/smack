import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channel: ChannelReducer
});

export default RootReducer;
