import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import ChannelsReducer from './channels_reducer';
import TextChannelReducer from './text_channel_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import DirectMessagesReducer from './direct_messages_reducer';
import DirectMessageReducer from './direct_message_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelsReducer,
  channel: ChannelReducer,
  textChannel: TextChannelReducer,
  subscriptions: SubscriptionsReducer,
  directMessages: DirectMessagesReducer,
  directMessage: DirectMessageReducer
});

export default RootReducer;
