import React from 'react';

import { Props } from './TaskList.config';
import { Task } from '../index';

import styles from './TaskList.module.scss';

export const TaskList: React.FC<Props> = ({ taskList }) => (
  <div className={styles.container}>
    {taskList.map((task) => (
      <Task key={task._id} task={task} />
    ))}
  </div>
);
