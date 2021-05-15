import { createStore, combineReducers } from 'redux';

import { reduxRootDefinitions } from '../definitions';
import { userReducer } from './reducers';

const reducers: Record<keyof reduxRootDefinitions.RootState, any> = {
  userState: userReducer,
};

const combinedReducers = combineReducers(reducers);

export const store = createStore(combinedReducers);
