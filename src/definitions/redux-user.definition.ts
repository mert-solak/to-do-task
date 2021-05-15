import { userDefinitions } from '.';
import { USER_SET_USER_NAME } from '../redux/action-types';

export interface State {
  userName: userDefinitions.UserName | null;
}

export type Action = {
  type: typeof USER_SET_USER_NAME;
  payload: userDefinitions.UserName;
};
