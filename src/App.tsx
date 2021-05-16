import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AxiosContext } from '@mertsolak/axios-helper';

import { Props } from './App.config';
import { userEvents } from './events';
import { userActions } from './redux/actions';
import { Loading } from './components';

const TasksPageLazy = lazy(() => import('./pages/tasks/Tasks.page'));

const App: React.FC<Props> = ({ history }) => {
  const { isLoading } = useContext(AxiosContext);

  const dispatch = useDispatch();

  useEffect(() => {
    userEvents.setUserName((userName) => dispatch(userActions.setUserName(userName)));

    userEvents.requestUserName();
  }, []);

  return (
    <div>
      <Router history={history}>
        <Loading isOpen={isLoading} />

        <Suspense fallback={<Loading isOpen />}>
          <Switch>
            <Route path="/" component={TasksPageLazy} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
