import { reduxUserDefinitions, reduxTaskDefinitions } from './index';

export interface RootState {
  userState: reduxUserDefinitions.State;
  taskState: reduxTaskDefinitions.State;
}
