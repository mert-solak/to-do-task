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

    default:
      return state;
  }
};
