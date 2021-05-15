import React from 'react';

import { Props } from './App.config';

import styles from './App.module.scss';

const App: React.FC<Props> = () => (
  <div className={styles.container}>
    <p>App</p>
  </div>
);

export default App;
