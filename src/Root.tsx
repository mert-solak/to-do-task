import React from 'react';
import { Provider } from 'react-redux';
import { AxiosProvider } from '@mertsolak/axios-helper';

import App from './App';

import { axiosConfig } from './configs';
import { Props } from './Root.config';
import { store } from './redux/store';

const Root: React.FC<Props> = ({ history }) => (
  <Provider store={store}>
    <AxiosProvider defaultOptions={axiosConfig.options} errorHandler={axiosConfig.errorHandler}>
      <App history={history} />
    </AxiosProvider>
  </Provider>
);

export default Root;
