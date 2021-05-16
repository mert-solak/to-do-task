import { eventConfig } from '../configs';
import { eventHelper } from '../helpers';
import { loadingDefinitions } from '../definitions';

export const sendIsLoading: loadingDefinitions.SendIsLoading = (isLoading) => {
  eventHelper.trigger(eventConfig.eventNames.isLoading, isLoading);
};
