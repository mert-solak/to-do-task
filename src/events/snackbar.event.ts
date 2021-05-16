import { eventConfig } from '../configs';
import { snackbarDefinitions } from '../definitions';
import { eventHelper } from '../helpers';

export const setErrorMessage: snackbarDefinitions.SetErrorMessage = (listener) => {
  eventHelper.on(eventConfig.eventNames.errorMessage, listener);
};

export const sendErrorMessage: snackbarDefinitions.SendErrorMessage = (errorMessage) => {
  eventHelper.trigger(eventConfig.eventNames.errorMessage, errorMessage);
};
