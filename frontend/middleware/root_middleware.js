import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ChannelMiddleware from './channel_middleware';
import TextChannelMiddleware from './text_channel_middleware';
import MessageMiddleware from './message_middleware';
import SubscriptionMiddleware from './subscription_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ChannelMiddleware,
  TextChannelMiddleware,
  MessageMiddleware,
  SubscriptionMiddleware
);

export default RootMiddleware;
