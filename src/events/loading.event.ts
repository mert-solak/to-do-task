import { eventConfig } from '../configs';
import { loadingDefinitions } from '../definitions';
import { eventHelper } from '../helpers';

export const sendIsLoading: loadingDefinitions.SendIsLoading = (isLoading) => {
  eventHelper.trigger(eventConfig.eventNames.isLoading, isLoading);
};
