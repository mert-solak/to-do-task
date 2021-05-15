import { eventHelper } from '../helpers';

import { userDefinitions } from '../definitions';
import { eventConfig } from '../configs';

export const setUserName: userDefinitions.SetUserName = (listener) => {
  eventHelper.once(eventConfig.eventNames.userName, listener);
};
