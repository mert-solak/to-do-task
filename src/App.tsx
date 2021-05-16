import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { AxiosContext } from '@mertsolak/axios-helper';
import { Switch, Route, Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Loading } from './components';
import { Props } from './App.config';
import { loadingEvents, userEvents } from './events';
import { userActions } from './redux/actions';

import styles from './App.module.scss';

const TasksPageLazy = lazy(() => import('./pages/tasks/Tasks.page'));

const App: React.FC<Props> = ({ history }) => {
  const { isLoading } = useContext(AxiosContext);

  const dispatch = useDispatch();

  useEffect(() => {
    userEvents.setUserName((userName) => dispatch(userActions.setUserName(userName)));

    userEvents.requestUserName();
  }, []);

  useEffect(() => {
    loadingEvents.sendIsLoading(isLoading);
  }, [isLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Router history={history}>
          <Suspense fallback={!isLoading && <Loading isOpen />}>
            <Switch>
              <Route path="/" component={TasksPageLazy} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </div>
  );
};

export default App;
