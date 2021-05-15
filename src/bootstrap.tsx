import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import Root from './Root';

import { MountReturn, MountParameters } from './bootstrap.config';
import { envConfig } from './configs';

const mount = (
  element: Element,
  { onRemoteNavigate, defaultHistory, initialPath }: MountParameters,
): MountReturn => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onRemoteNavigate) {
    history.listen(onRemoteNavigate);
  }

  ReactDOM.render(<Root history={history} />, element);

  return {
    onHostNavigate({ pathname: nextPathname }: { pathname: string }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (envConfig.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#template');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory(), initialPath: '', onRemoteNavigate: () => {} });
  }
}

export { mount };
