import { combineReducers } from 'redux';
import todoReducer from './todosReducers';
export default combineReducers({ todosState: todoReducer })