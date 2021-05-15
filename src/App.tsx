import React, { useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TasksPage from './pages/tasks/Tasks.page';
import { Props } from './App.config';
import { userEvents } from './events';
import { userActions } from './redux/actions';

const App: React.FC<Props> = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    userEvents.setUserName((userName) => dispatch(userActions.setUserName(userName)));

    userEvents.requestUserName();
  }, []);

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={TasksPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
