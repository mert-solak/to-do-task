import { reduxTaskDefinitions } from '../../definitions';
import { TASK_SET_TASKS } from '../action-types';

export const setTasks = (tasks: reduxTaskDefinitions.State['tasks']) => ({
  type: TASK_SET_TASKS,
  payload: tasks,
});
