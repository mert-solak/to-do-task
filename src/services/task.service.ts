import { AxiosInstance, AxiosPromise } from 'axios';
import { urlConfig } from '../configs';
import { serviceTaskDefinitions } from '../definitions';

export const getTasks = (
  axios: AxiosInstance,
  params: serviceTaskDefinitions.GetTasksInput,
): AxiosPromise<serviceTaskDefinitions.GetTasksReturn> =>
  axios.request({
    method: 'GET',
    url: urlConfig.routes.tasks,
    params,
  });
