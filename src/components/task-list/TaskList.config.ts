import { taskDefinitions, userDefinitions } from '../../definitions';

export interface Props {
  taskList: taskDefinitions.Task[];
  status: taskDefinitions.Task['status'];
  userName: userDefinitions.UserName;
}
