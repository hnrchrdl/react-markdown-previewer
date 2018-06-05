import { combineReducers } from 'redux';
import ioReducer from './ioReducer';

export default combineReducers({ io: ioReducer });
