import { taskDefinitions } from '.';
import { TASK_SET_TASKS } from '../redux/action-types';

export interface State {
  tasks: taskDefinitions.Task[];
}

export type Action = {
  type: typeof TASK_SET_TASKS;
  payload: taskDefinitions.Task[];
};
