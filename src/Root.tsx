import React from 'react';
import { Provider } from 'react-redux';

import App from './App';

import { Props } from './Root.config';
import { store } from './redux/store';

const Root: React.FC<Props> = ({ history }) => (
  <Provider store={store}>
    <App history={history} />
  </Provider>
);

export default Root;
