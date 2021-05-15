import { reduxUserDefinitions } from '../../definitions';
import { USER_SET_USER_NAME } from '../action-types';

export const setMessageState = (userName: reduxUserDefinitions.State['userName']) => ({
  type: USER_SET_USER_NAME,
  payload: userName,
});
