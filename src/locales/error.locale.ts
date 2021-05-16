import { errorDefinitions } from '../definitions';

export const errorMessages: Record<errorDefinitions.ErrorTypes, string> = {
  DATA_NOT_EXISTS: 'Data not exists',
  UNHANDLED_ERROR: 'Unhandled error',
  VALIDATION_ERROR: 'Given input is invalid',
};
