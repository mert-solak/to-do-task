import { envConfig } from '.';

export const urls = {
  api: envConfig.env.API,
};

export const routes = {
  tasks: `${urls.api}/tasks`,
};
