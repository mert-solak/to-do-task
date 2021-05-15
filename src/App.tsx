import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import TasksPage from './pages/Tasks.page';

import { Props } from './App.config';

const App: React.FC<Props> = ({ history }) => (
  <div>
    <Router history={history}>
      <Switch>
        <Route path="/" component={TasksPage} />
      </Switch>
    </Router>
  </div>
);

export default App;
