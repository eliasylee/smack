import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ChannelMiddleware from './channel_middleware';
import TextChannelMiddleware from './text_channel_middleware';
import MessageMiddleware from './message_middleware';
import SubscriptionMiddleware from './subscription_middleware';
import DirectMessagesMiddleware from './direct_messages_middleware';
import DirectChatMessageMiddleware from './direct_chat_message_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ChannelMiddleware,
  TextChannelMiddleware,
  MessageMiddleware,
  SubscriptionMiddleware,
  DirectMessagesMiddleware,
  DirectChatMessageMiddleware
);

export default RootMiddleware;
