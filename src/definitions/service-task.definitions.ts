import { taskDefinitions } from '.';

export interface GetTasksInput {
  filterBy?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

export type GetTasksReturn = taskDefinitions.Task[];
