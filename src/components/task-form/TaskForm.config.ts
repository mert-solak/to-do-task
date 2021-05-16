import { taskDefinitions, userDefinitions } from '../../definitions';

export interface Props {
  task?: taskDefinitions.Task;
  userName: userDefinitions.UserName;
  status: taskDefinitions.Task['status'];
  onCreateUpdateFinish?: () => void;
}
