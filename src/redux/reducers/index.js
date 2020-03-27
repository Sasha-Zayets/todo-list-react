import { combineReducers } from 'redux';
import taskReducer from './task';
import authReducer from './auth';

export const rootReducer = combineReducers({
    task: taskReducer,
    auth: authReducer
});