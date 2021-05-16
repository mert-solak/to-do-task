import { snackbarEvents } from '../events';
import { errorLocale } from '../locales';

export const options = {
  isLoadingBlocked: false,
  isErrorHandlerBlocked: false,
  handleErrorsBy: 'name',
  handleErrorsWith: errorLocale.errorMessages,
};

export const errorHandler = (errorMessage: string) => {
  snackbarEvents.sendErrorMessage(errorMessage);
};
