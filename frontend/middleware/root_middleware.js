import { applyMiddleware } from 'redux';
import SessionMiddleWare from './session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleWare
);

export default RootMiddleware;
