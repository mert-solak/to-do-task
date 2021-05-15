import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { envConfig } from '../configs';
import { reduxRootDefinitions } from '../definitions';
import { userReducer, taskReducer } from './reducers';

const reducers: Record<keyof reduxRootDefinitions.RootState, any> = {
  userState: userReducer,
  taskState: taskReducer,
};

const combinedReducers = combineReducers(reducers);

const middleWares = envConfig.env.NODE_ENV === 'production' ? [] : [logger];

export const store = createStore(combinedReducers, applyMiddleware(...middleWares));
