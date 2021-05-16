import { reduxTaskDefinitions } from '../../definitions';
import { TASK_SET_TASKS, TASK_ADD_TASK, TASK_REMOVE_TASK, TASK_UPDATE_TASK } from '../action-types';

export const setTasks = (tasks: reduxTaskDefinitions.State['tasks']) => ({
  type: TASK_SET_TASKS,
  payload: tasks,
});

export const addTask = (task: reduxTaskDefinitions.State['tasks'][0]) => ({
  type: TASK_ADD_TASK,
  payload: task,
});

export const updateTask = (
  task: Partial<reduxTaskDefinitions.State['tasks'][0]> & {
    _id: reduxTaskDefinitions.State['tasks'][0]['_id'];
  },
) => ({
  type: TASK_UPDATE_TASK,
  payload: task,
});

export const removeTask = (id: reduxTaskDefinitions.State['tasks'][0]['_id']) => ({
  type: TASK_REMOVE_TASK,
  payload: id,
});
