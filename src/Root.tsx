import React from 'react';
import { AxiosProvider } from '@mertsolak/axios-helper';
import { Provider } from 'react-redux';

import App from './App';
import { Props } from './Root.config';
import { axiosConfig } from './configs';
import { store } from './redux/store';

const Root: React.FC<Props> = ({ history }) => (
  <Provider store={store}>
    <AxiosProvider defaultOptions={axiosConfig.options} errorHandler={axiosConfig.errorHandler}>
      <App history={history} />
    </AxiosProvider>
  </Provider>
);

export default Root;
