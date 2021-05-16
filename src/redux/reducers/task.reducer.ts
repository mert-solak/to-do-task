import { reduxTaskDefinitions } from '../../definitions';

export const taskReducer = (
  state: reduxTaskDefinitions.State = {
    tasks: [],
  },
  action: reduxTaskDefinitions.Action,
): reduxTaskDefinitions.State => {
  switch (action.type) {
    case 'TASK_SET_TASKS':
      return {
        ...state,
        tasks: [...action.payload],
      };

    case 'TASK_ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'TASK_UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload;
          }

          return task;
        }),
      };

    case 'TASK_REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };

    default:
      return state;
  }
};
