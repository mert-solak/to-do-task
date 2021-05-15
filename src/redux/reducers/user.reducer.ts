import { reduxUserDefinitions } from '../../definitions';

export const userReducer = (
  state: reduxUserDefinitions.State = {
    userName: null,
  },
  action: reduxUserDefinitions.Action,
): reduxUserDefinitions.State => {
  switch (action.type) {
    case 'USER_SET_USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};
