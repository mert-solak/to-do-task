import { errorLocale } from '../locales';
import { snackbarEvents } from '../events';

export const options = {
  isLoadingBlocked: false,
  isErrorHandlerBlocked: false,
  handleErrorsBy: 'name',
  handleErrorsWith: errorLocale.errorMessages,
};

export const errorHandler = (errorMessage: string) => {
  snackbarEvents.sendErrorMessage(errorMessage);
};
