import { taskDefinitions } from '.';
import { TASK_SET_TASKS, TASK_ADD_TASK, TASK_REMOVE_TASK, TASK_UPDATE_TASK } from '../redux/action-types';

export interface State {
  tasks: taskDefinitions.Task[];
}

export type Action =
  | {
      type: typeof TASK_SET_TASKS;
      payload: taskDefinitions.Task[];
    }
  | {
      type: typeof TASK_ADD_TASK;
      payload: taskDefinitions.Task;
    }
  | {
      type: typeof TASK_UPDATE_TASK;
      payload: taskDefinitions.Task;
    }
  | {
      type: typeof TASK_REMOVE_TASK;
      payload: taskDefinitions.Task['_id'];
    };
