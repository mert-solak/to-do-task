import { taskDefinitions } from '.';

export interface GetTasksInput {
  filterBy?: string;
  search?: string;
  limit?: number;
  offset?: number;
}
export type GetTasksReturn = taskDefinitions.Task[];

export type UpdateTaskInput = Partial<taskDefinitions.Task> & { _id: taskDefinitions.Task['_id'] };
export type UpdateTaskReturn = taskDefinitions.Task;

export type DeleteTaskInput = { _id: taskDefinitions.Task['_id'] };
export type DeleteTaskReturn = taskDefinitions.Task;

export type CreateTaskInput = Omit<taskDefinitions.Task, '_id'>;
export type CreateTaskReturn = taskDefinitions.Task;
