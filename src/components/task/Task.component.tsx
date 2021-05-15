import React from 'react';

import { Props } from './Task.config';
import { momentHelper } from '../../helpers';

import styles from './Task.module.scss';

const Task: React.FC<Props> = ({ task }) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.statusDot} />
    </div>
    <div className={styles.middle}>
      <p className={styles.userName}>{task.name}</p>
      {task.finishesAt && <p className={styles.dates}>{momentHelper.formatStringDate(task.finishesAt)}</p>}
    </div>
    <div className={styles.right}>
      <p>{task.userName}</p>
    </div>
  </div>
);
