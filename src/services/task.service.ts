import { AxiosInstance, AxiosPromise } from 'axios';

import { serviceTaskDefinitions } from '../definitions';
import { urlConfig } from '../configs';

export const getTasks = (
  axios: AxiosInstance,
  params: serviceTaskDefinitions.GetTasksInput,
): AxiosPromise<serviceTaskDefinitions.GetTasksReturn> =>
  axios.request({
    method: 'GET',
    url: urlConfig.routes.tasks,
    params,
  });

export const CreateTask = (
  axios: AxiosInstance,
  data: serviceTaskDefinitions.CreateTaskInput,
): AxiosPromise<serviceTaskDefinitions.CreateTaskReturn> =>
  axios.request({
    method: 'POST',
    url: urlConfig.routes.tasks,
    data,
  });

export const deleteTask = (
  axios: AxiosInstance,
  params: serviceTaskDefinitions.DeleteTaskInput,
): AxiosPromise<serviceTaskDefinitions.DeleteTaskReturn> =>
  axios.request({
    method: 'DELETE',
    url: urlConfig.routes.tasks,
    params,
  });

export const updateTask = (
  axios: AxiosInstance,
  data: serviceTaskDefinitions.UpdateTaskInput,
): AxiosPromise<serviceTaskDefinitions.UpdateTaskReturn> =>
  axios.request({
    method: 'PATCH',
    url: urlConfig.routes.tasks,
    data,
  });
